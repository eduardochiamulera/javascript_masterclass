let regExp = /^\w+@\w+\.com$/;
let result = regExp.exec("blank@gmail.com");
console.log(result[0]);
console.log(result.index);
console.log(result.input);
