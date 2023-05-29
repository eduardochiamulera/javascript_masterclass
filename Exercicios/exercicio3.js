const statement = "create table author (id number, name string, age number, city string, state string, country string)";


const database = {
    "tables": {},
    createTable(tableName, columns){
        this.tables = { [tableName] : { "columns": {}, data: []} };
        for(let i =0; i < columns.length; i++){
            const columnName = columns[i].split(" ");
            this.tables[tableName].columns[columnName[0]] = columnName[1];
        }
    },
    execute(statement) {
        const regExp = /create table ([a-z]+) \((.+)\)/;
        const parsedStatement = statement.match(regExp);
        const tableName = parsedStatement[1];
        let columnsStr = parsedStatement[2];
        columnsStr = columnsStr.split(", ");
        this.createTable(tableName, columnsStr);
    }
}
database.execute(statement);
console.log(JSON.stringify(database, undefined, "  "))