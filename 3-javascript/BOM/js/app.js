console.log(window);
// console.log(innerHeight);
// console.log(innerWidth);
// console.log(outerHeight);
// console.log(outerWidth);

// window.addEventListener('scroll',() => {
//     console.log(scrollY);
// })

// window.addEventListener('load', () => {
//     console.log("window loaded");
// });
// console.log("hello");

// window.addEventListener("resize", () => {
//     console.clear();
//   console.log("inner H ", innerHeight);
//   console.log("inner W ", innerWidth);
//   console.log("outer H", outerHeight);
//   console.log("outer W", outerWidth);
// });

// window.addEventListener('offline',() => {
//     console.log("it is offline");
// })

// window.onoffline = (event) => {
//     console.log("The network connection has been lost.");
// };

// window.ononline = (event) => {
//     console.log("The network connection has been return");
// };

// window.addEventListener('online',() => {
//     console.log("it is online");
// })

// timeout = ချိန်ကိုက်ဗုံး
// const run = () => {
//     console.log('time out');
//     return `I'm working`;
// }
// setTimeout(run,5000);

// interval => ထပ်ခါထပ်ခါ
// const showClock = () => {
//     const d = new Date();
//     console.clear();
//     console.log(d.getHours(),d.getMinutes(),d.getSeconds());
// }

// setInterval(showClock, 1000);

const clock = document.querySelector("#clock");
const stopBtn = document.querySelector("#stopBtn");
const scrollBtn = document.querySelector("#scrollBtn");
const here = document.querySelector("#here");

// const showClock = () => {
//   const d = new Date();
//   clock.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// };

// const clockRunner = setInterval(showClock, 1000);
// stopBtn.addEventListener('click',() => {
//     clearInterval(clockRunner);
// })

scrollBtn.addEventListener('click',() => {
    scrollTo(0,here.getBoundingClientRect().y);
})


