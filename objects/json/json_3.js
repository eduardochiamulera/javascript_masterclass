const book1 = {
    name: "Refactoring",
    author: "Martin Fowler"
}

const book2 = {
    name: "Refactoring",
    author: "Martin Fowler"
}

console.log(JSON.stringify(book1) === JSON.stringify(book2));