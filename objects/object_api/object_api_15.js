const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.preventExtensions(javascript);
javascript.name = "ECMAScript";
console.log(javascript);
console.log(Object.isExtensible(javascript));