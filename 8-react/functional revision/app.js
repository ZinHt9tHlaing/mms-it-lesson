const fruits = ["apple", "orange", "mango", "banana"];
// console.log(fruits);
// fruits.splice(2, 1);

const newFruit = fruits.filter(fruit => fruit != "mango");
// console.log(fruits);
// console.log(newFruit);

// fruits.push="lemon";
// console.log(fruits);

// const newFruit = [...fruits, "lemon"];
// console.log(fruits);
// console.log(newFruit);

const obj = { a: "aaa", b: "bbb", c: "ccc" };
// console.log(obj);
// obj.d = "ddd";

// obj.b = "xxx";
// console.log(obj);

const newObj = { ...obj, b: "xxx" };
console.log(obj);
console.log(newObj);

// const newObj = { ...obj, d: "ddd" };
// console.log(obj);
// console.log(newObj);