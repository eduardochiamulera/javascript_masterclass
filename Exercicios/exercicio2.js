const statement = "create table author (id number, name string, age number, city string, state string, country string)";
const regExp = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statement.match(regExp);
const tableName = parsedStatement[1];
let columnsStr = parsedStatement[2];
columnsStr = columnsStr.split(", ");

const database = {
    "tables": {
        [tableName]: {
            columns: {},
            data: []
        }
    }
}

for(let i =0; i < columnsStr.length; i++){
    const columnName = columnsStr[i].split(" ");
    database.tables[tableName].columns[columnName[0]] = columnName[1];
}

console.log(JSON.stringify(database));