const javascript = {};
Object.defineProperty(javascript, "name", {
    value: "JavaScript",
    enumerable: true,
    writable: true
});
javascript.name = "ECMAScript";
delete javascript.name
console.log(javascript);
console.log(javascript.name);