const ws1 = new WeakSet();
const obj1 = "value";
const obj2 = "value";
ws1.add(obj1);
ws1.add(obj2);
console.log(ws1);
console.log(ws1.has(obj1));
console.log(ws1.has(obj2));