const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972,
    company: {
        name: "Bell Labs"
    }
};
const {name: n, author: a, year: y, company: { name } } = language;
console.log(n, a, y, name);