const statement = "create table author (id number, name string, age number, city string, state string, country string)";
const regExp = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statement.match(regExp);
const tableName = parsedStatement[1];
let columnsStr = parsedStatement[2];
columnsStr = columnsStr.split(", ");

const database = {
    tables: {
        [tableName] : {
            columns: {

            },
            data: []
        }
    }
};

for( let column of columnsStr){
    column = column.split(" ");
    const name = column[0]
    const type = column[1];
    database.tables[tableName].columns[name] = type;
}
console.log(JSON.stringify(database, undefined, "  "))