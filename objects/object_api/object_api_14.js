const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.preventExtensions(javascript);
console.log(Object.isExtensible(javascript));