// let myself = {
//   // property
//   myName: "zin htet hlaing",
//   myAge: 21,
//   skill: ["html", "css", "js", "php", "sql"],
//   job: "developer",

//   // method
//   teach: function () {
//     return this.myName + " can teach web development";
//   },

//   learn() {
//     return "zhh can learn web development";
//     },
  
//     run() {
//         return this.myName;
//   }
// };

// console.log(myself);

// console.log(myself.myName);
// console.log(myself["myName"]);

// console.log(myself.teach());
// console.log(myself.learn());

// console.log(myself.teach());

const obj = {
  'a': "aaa",
  'b': "bbb",
  'c': "ccc",
}

console.dir(Object.keys(obj));
console.dir(Object.values(obj));
