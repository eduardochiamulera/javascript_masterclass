const statement = "create table author (id number, name string, age number, city string, state string, country string)";


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
    }
}
database.execute(statement);
console.log(JSON.stringify(database, undefined, "  "))