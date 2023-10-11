import { Carousel } from "bootstrap";
import "./app.scss";
// import "../node_modules/venobox/dist/venobox";
import Aos from "aos";
import "../node_modules/waypoints/lib/noframework.waypoints";

Aos.init();

const nav = document.querySelector(".my-nav");
const sidePhoto = document.querySelector(".side-photo");

const sanKyiTar = document.querySelector("#sanKyiTar");
const w1 = new Waypoint({
  element: sanKyiTar,
  handler: () => {
    nav.classList.replace("bg-primary", "bg-danger");
    sidePhoto.classList.add("active");
  },
});

const s2 = document.querySelector("#s2");
const w2 = new Waypoint({
  element: s2,
  handler: () => {
    nav.classList.replace("bg-danger", "bg-success");
    sidePhoto.classList.remove("active");
  },
});

const s3 = document.querySelector("#s3");
const w3 = new Waypoint({
  element: s3,
  handler: () => {
    sidePhoto.classList.add("active");
  },
});

const s4 = document.querySelector("#s4");
const w4 = new Waypoint({
  element: s4,
  handler: () => {
    sidePhoto.classList.remove("active");
  },
});

// window.myName = "zin htet hlaing";

// const venobox = new VenoBox({
//   selector: ".venobox",
// //   overlayColor: "#377dff60",
//   share: true,
//   spinner: "plane",
// });

// console.log(venobox);

// const sliderElement

// const sliderElement = document.querySelector("#carouselExampleIndicators");
// // const slider = new bootstrap.Carousel(sliderElement);
// const slider = new Carousel(sliderElement, {
//   interval: 2000,
//   ride: "carousel",
//   // wrap:true
// });

// const textSliderElement = document.querySelector("#textSlide");
// const textSlider = new Carousel(textSliderElement, {
//   interval: 2000,
//   ride: "carousel",
// });

// const next = document.querySelector("#next");
// next.addEventListener("click", () => {
//   slider.next();
//   textSlider.next();
//   // slider.prev();
//   // slider.to(2);
// });

// console.log(sliderElement);
// console.log(slider);
