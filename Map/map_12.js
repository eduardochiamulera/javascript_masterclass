const obj = {};
console.log("toString" in obj);
console.log("valueOf" in obj);

const map = new Map();
console.log(map.get("toString"));
console.log(map.get("valueOf"));