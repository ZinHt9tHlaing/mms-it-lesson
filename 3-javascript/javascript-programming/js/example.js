const numbers = [4, 2, 5, 3, 2, 7, 1, 4];

// map function build
const mapper = (arr, callback) => {
  const result = [];

  for (let el of arr) {
    result.push(callback(el));
  }
  return result;
};

// console.log(
//   mapper(numbers, (el) => {
//     return el * 2;
//   })
// );

// filter function build
const filter = (arr, callback) => {
  const result = [];

  for (let el of arr) {
    if (callback(el)) {
      result.push(el);
    }
  }
  return result;
};

// console.log(filter(numbers, (el) => el > 3));

const arr = ["a", "b"];

const newArr = [...arr, "c"];
const newNewArr = [...newArr, "d"];

// arr.push("c");
// arr.push("d");
// arr.push("e");

// arr[2] = "c";
// arr[3] = "d";

// console.log(arr);
// console.log(newArr);
// console.log(newNewArr);

const obj = { a: "aaa", b: "bbb" };
const newObj = { ...obj, c: "ccc" };
const newNewObj = { ...newObj, d: "ddd" };

// obj.c = 'ddd',
// obj.d = 'ddd',

// console.log(obj);
// console.log(newObj);
// console.log(newNewObj);

// Recursive factorial calculation
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(5));

const btn = document.querySelector("#btn");
console.dir(btn);
