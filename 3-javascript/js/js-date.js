// console.log(Date());

// const d = new Date();
// // console.dir(d);
// console.log(d);

// to methods
// console.log(d.toString());
// console.log(d.toTimeString());
// console.log(d.toLocaleDateString());
// console.log(d.toDateString());

// get method
// console.log(d.getFullYear(), d.getMonth(), d.getDay());
// console.log(d.getHours(),d.getMinutes(),d.getMilliseconds());
// console.log(d.getTime());

// set methods

// d.setHours(d.getHours() + 300);
// console.log(d);

// d.setMonth(d.getMonth() + 4);
// console.log(d);

// const courseHours = 50;
// const learningHourPerDay = 2;
// const learningDays = courseHours / learningHourPerDay;

// d.setDate(d.getDate() + learningDays);

// console.log("U will finish SWD at" ,d.toDateString());

// const d = new Date("Dec 31 2019");
// const d = new Date("Dec 31 2019");
// console.log(d);

// console.log(d.getFullYear());
// console.log(d.getMonth());

// console.log(typeof Date());
// console.dir(new Date());

const d = new Date(new Date().setFullYear(2019));
console.log(d.getFullYear());
console.log(`${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()}`);

console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`);