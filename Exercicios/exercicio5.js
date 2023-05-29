const statement = "create table author (id number, name string, age number, city string, state string, country string)";
//const statement = "select id, name from author"

const DatabaseError = function (statement, message){
    this.statement = statement;
    this.message = message;
}

const database = {
    tables: {},
    createTable(statement){
        const regExp = /create table ([a-z]+) \((.+)\)/;
        const parsedStatement = statement.match(regExp);
        const tableName = parsedStatement[1];
        this.tables[tableName] = {
            columns: {},
            data: []
        };
        let columns = parsedStatement[2];
        columns = columns.split(", ");
        for(let i =0; i < columns.length; i++){
            const columnName = columns[i].split(" ");
            this.tables[tableName].columns[columnName[0]] = columnName[1];
        }
    },
    insert(statement){
        const regex = /insert into (?<tableName>\w+) \((?<columns>.+)\) values \((?<values>.+)\)$/;;
        const result = regex.exec(statement);
        const tableName = result[1];
        const columns = result[2];
        const values = result[3];
        const columnsArray = columns.split(",");
        const valuesArray = values.split(",");
        const row = {};
        for(let i=0; i< columnsArray.length; i++){
            row[columnsArray[i].trim()] = valuesArray[i].trim();
        }
        this.tables[tableName].data.push(row);
    },
    execute(statement) {
        if(statement.startsWith("create table")){
            return this.createTable(statement);
        }
        if(statement.startsWith("insert into")){
            return this.insert(statement);
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
    console.log(JSON.stringify(database, undefined, "  "))
}catch(error){
    console.log(error.message);
}