let regExp = /^[a-z]{3,4}@gmail\.com$/;
let result = regExp.exec("joe@gmail.com");
console.log(result[0]);
console.log(result.index);
console.log(result.input);
