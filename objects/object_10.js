const key1 = "title";
const key2 = "author";
const key4 = "language";
const key5 = "available";

const book = {};
book[key1] = "Clean Code";
book[key2] = "Robert C. Martin";
book["number-of-pages"] = 464;
book[key4] = "English";
book[key5] = true;
console.log(book);