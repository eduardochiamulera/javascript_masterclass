let regExp = /^[a-z][a-z][a-z][a-z]@gmail\.com$/;
let result = regExp.exec("joe@gmail.com");
console.log(result[0]);
console.log(result.index);
console.log(result.input);
