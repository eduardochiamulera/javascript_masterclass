const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.freeze(javascript);
javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year;
console.log(javascript);
console.log("IsExtensible",Object.isExtensible(javascript));
console.log("IsSealed",Object.isSealed(javascript));
console.log("IsFrozen",Object.isFrozen(javascript));