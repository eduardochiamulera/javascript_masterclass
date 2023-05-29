//Extraia partes do comando como o nome da tabela e as colunas, armazenando-as em variáveis.

// Dado o comando:
//  create table author (id number, name string, age number, city string, state string, country string)

//Extraia o nome da tabela e armazene em uma variável chamada "tableName".
//Extraia as colunas da tabela e armazene em uma variável chamada "columns".
//Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em uma string separada.
let regExp = /^((\w+)(\s))+\(?((\w+)(\s)+(\w+)\,?(\s))+(\w+)(\s)(\w+)\)/;
let result = regExp.exec("create table author (id number, name string, age number, city string, state string, country string)");
console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result.index);
console.log(result.input);
const tableName = result[2];
const columns = [];
result[0].replace("create table author (","").replace(")","").split(',').map(elem => columns.push(`'${elem.trimStart()}'`));
console.log("TableName " + tableName)
console.log("columns " + columns)