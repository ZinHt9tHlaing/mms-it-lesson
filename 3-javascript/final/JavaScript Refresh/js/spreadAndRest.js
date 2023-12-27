// const myIntro = {
//   name: "Christ",
//   age: 22,
//   gender: "male",
// };

// const id = {
//   ...myIntro,
//   learn: "Web Development",
// };

// console.log(myIntro);
// console.log(id);

// const one = [1, 2, 3, 4, 5];
// const two = [6, 7, 8, 9, 10];
// const three = [...one, ...two];

// console.log(three);

// const rest = (x, y, ...rest) => {
//   return x + y, rest;
// };

// console.log(rest(11, 22, 3, 4, 5));

// const defaultPara = (x = 1, y = 2) => {
//   return x + y;
// };
// console.log(defaultPara());

const num = [1, 2, 3, 4, 5];

const [one, two, ...spread] = num;
console.log(one,two,spread);
