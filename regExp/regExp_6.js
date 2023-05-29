let regExp = /^john@gmail\.com$/;
let result = regExp.exec("john@gmail.com");
console.log(result[0]);
console.log(result.index);
console.log(result.input);
