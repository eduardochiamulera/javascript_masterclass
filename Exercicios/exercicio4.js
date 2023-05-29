//const statement = "create table author (id number, name string, age number, city string, state string, country string)";
const statement = "select id, name from author"

const databaseError = function (statement, message){
    this._statement = statement;
    this._message = message;
    this.error = () => `${message} '${statement}'`;
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
        throw new databaseError(statement, "Syntax error:");
    }
}
try
{
    database.execute(statement);
}catch(error){
    console.log(error.error());
}
//console.log(JSON.stringify(database, undefined, "  "))