const statement = "create table author (id number, name string, age number, city string, state string, country string)";


const DatabaseError = function (statement, message){
    this.statement = statement;
    this.message = message;
}

const database = {
    tables: {},
    createTable(statement){
        const regExp = /create table ([a-z]+) \((.+)\)/;
        const parsedStatement = statement.match(regExp);
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
    insert(statement){
        const regExp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/
        const parsedStatement = statement.match(regExp);
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