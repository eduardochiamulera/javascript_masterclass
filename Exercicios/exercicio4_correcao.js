//const statement = "create table author (id number, name string, age number, city string, state string, country string)";
const statement = "select id, name from author"

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
    execute(statement) {
        if(statement.startsWith("create table")){
            return this.createTable(statement);
        }
        const message = `Syntax error: '${statement}'`;
        throw new DatabaseError(statement, message);
    }
}
try
{
    database.execute(statement);
}catch(error){
    console.log(error.message);
}