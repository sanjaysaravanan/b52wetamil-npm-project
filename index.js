const lodash = require("lodash");

const obj1 = { name: "sanjay", age: 40 };
const obj2 = { age: 40, name: "sanjay" };

// compare above two objects and find whether they are equal

console.log(obj1 === obj2);

console.log(lodash.isEqual(obj1, obj2));

// class
