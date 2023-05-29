const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.seal(javascript);
javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year;
console.log(javascript);
console.log("IsExtensible",Object.isExtensible(javascript));
console.log("IsSealed",Object.isSealed(javascript));