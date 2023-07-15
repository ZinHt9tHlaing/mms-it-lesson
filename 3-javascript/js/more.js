// const x = "xxx";

// console.log(x);

// x = "bbb";

// console.log(x);

// let fruits = ["apple", "orange", "mango", "banana", "lemon", "lime"];

// const mySelf = {
//   name: "zin htet hlaing",
//   age: 21,
//   job: "student",
//   relationship: null,
//   skill: "learning",
// };

// mySelf.name = "Ko Zin";
// console.log(mySelf);

// let run = function () {
//   return "This is run";
// };

// run = 5;

// console.log(run());

// fruits = 55;

// console.log(fruits[0]);
// console.log(fruits[3]);

// let x = 5;
// let y = x;

// console.log("x", x, "y", y);

// x = 10;

// console.log("x", x, "y", y);

// let x = {};
// let y = x;

// console.log("x", x, "y", y);

// x.name = "ko zin";

// console.log("x", x, "y", y);

// let a = [];
// let b = a;

// console.log("a", a, "b", b);

// a[0] = "aaa";
// a[1] = "111";

// console.log("a", a, "b", b);

// let a = function () {
//   return "Hello world";
// }

// let b = function () {
//   return a();
// }

// console.log("a", a(), "b", b());

// a = function () {
//   return "hi there";
// }

// console.log("a", a(), "b", b());

// console.log(2 * (3 + 5));

for (let i = (function () {
  console.log("st 1");
  return 0;
})(); (function () {
    let condition = i < 5;
  console.log("st 2",condition);
  return condition;
  })(); (function () {
    i++;
    console.log("st 3",i);
    return i;
})()){
  console.log("loop", i);
}

