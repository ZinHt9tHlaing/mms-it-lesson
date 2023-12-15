// console.log("one");

// try {
//   let x = 5;
//   let y = 10;
//   if (x > y) {
//     throw new Error("this is error message");
//   }
// } catch (error) {
//     console.error(error.message);
// } finally {
//   console.log("All Done");
// }

// console.log("two");
// console.log("three");

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     if (!true) {
//       resolve("resolve code");
//     }
//     else {
//       reject("reject code");
//     }

//   }, 1500)
// });

// p.then((data) => {
//   console.log(data);
// });

// p.catch((error) => {
//   console.log(error);
// })

// GEC & FEC

// 2002-04-9

function findBirthYear(bd) {
  const bdDate = new Date(bd);
  return bdDate.getFullYear();
} // 2002

const myName = "zin htet hlaing";
const myBd = "2002-04-9";

function findAge(birthYear) {
  const date = new Date();
  return date.getFullYear() - birthYear;
} // 21

let x = 10;
let y = 15;

function myIntro(name, bd) {
  const age = findAge(findBirthYear(bd));
  return `My name is ${name} and my age is ${age} year${
    age > 1 ? "s" : ":"
  } old`;
}

console.log(myIntro(myName, myBd));
