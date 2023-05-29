const statement = "create table author (id number, name string, age number, city string, state string, country string)";


const DatabaseError = function (statement, message){
    this.statement = statement;
    this.message = message;
}

const Parser = function(){
    const commands = new Map();
    commands.set("createTable", /create table ([a-z]+) \((.+)\)/);
    commands.set("insert", /insert into ([a-z]+) \((.+)\) values \((.+)\)/);
    commands.set("select", /select (.+) from ([a-z]+)(?: where (.+))?/);
    commands.set("delete", /delete from ([a-z]+)(?: where (.+))?/);

    this.parse = function(statement){
        for (let [command, regExp] of commands){
            const parsedStatement = statement.match(regExp);
            if(parsedStatement) {
                return {
                    command,
                    parsedStatement
                }
            }
        }
    };
}

const database = {
    tables: {},
    parser: new Parser(),
    createTable(parsedStatement){
        let [,tableName, columns] = parsedStatement;
        this.tables[tableName] = {
            columns: {},
            data: []
        };
        columns = columns.split(", ");
        for(let i =0; i < columns.length; i++){
            const columnName = columns[i].split(" ");
            const [name, type] = columnName;
            this.tables[tableName].columns[name] = type;
        }
    },
    insert(parsedStatement){
        let [,tableName, columns, values] = parsedStatement;
        columns = columns.split(", ");
        values = values.split(", ");
        const row = {};
        for(let i=0; i < columns.length; i++){
            const column = columns[i];
            const value = values[i];
            row[column] = value;
        }
        this.tables[tableName].data.push(row);
    },
    select(parsedStatement){
        let [, columns, tableName, where] = parsedStatement;
        columns = columns.split(", ");
        let rows = this.tables[tableName].data;
        if(where){
            const [columnWhere, valueWhere] = where.split(" = ");
            rows = rows.filter(function (row){
                return row[columnWhere] === valueWhere;
            });
        }
        rows = rows.map(row => {
            let obj = {};
            for(column of columns){
                obj[column] = row[column];
            }
            return obj;
        })

        return rows;
    },
    delete(parsedStatement){     
        let [, tableName, whereClause] = parsedStatement;
        if(whereClause){
            const [columnWhere, valueWhere] = whereClause.split(" = ");
            this.tables[tableName].data = this.tables[tableName].data.filter(function (row){
                return row[columnWhere] !== valueWhere;
            });
        }
        else
        {
            this.tables[tableName].data = [];
        }
    },
    execute(statement) {
        const result = this.parser.parse(statement);
        if(result){
            return this[result.command](result.parsedStatement);
        }
        const message = `Syntax error: '${statement}'`;
        throw new DatabaseError(statement, message);
    }
}
try
{
    database.execute(statement);
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    database.execute("delete from author where id = 2");
    console.log(JSON.stringify(database.execute("select name, age from author"), undefined, " "));
}catch(error){
    console.log(error.message);
}