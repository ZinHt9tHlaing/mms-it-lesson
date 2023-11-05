// console.log(window);
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

// const clock = document.querySelector("#clock");
// const stopBtn = document.querySelector("#stopBtn");
// const scrollBtn = document.querySelector("#scrollBtn");
// const here = document.querySelector("#here");

// const showClock = () => {
//   const d = new Date();
//   clock.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// };

// const clockRunner = setInterval(showClock, 1000);
// stopBtn.addEventListener('click',() => {
//     clearInterval(clockRunner);
// })

// scrollBtn.addEventListener('click',() => {
//     scrollTo(0,here.getBoundingClientRect().y);
// })

// console.log(screen);
// console.log(location);

// console.log(navigator.geolocation.getCurrentPosition((pos) => {
//     console.log(pos);
// }));

// navigator.getBattery().then((battery) => {
//     console.log(battery);
// })

let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

camera_button.addEventListener("click", async function () {
  let stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  video.srcObject = stream;
});

click_button.addEventListener("click", function () {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  let image_data_url = canvas.toDataURL("image/jpeg");

  // data url of the image
  console.log(image_data_url);
});

