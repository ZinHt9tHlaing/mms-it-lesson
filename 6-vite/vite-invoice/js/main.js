import "../scss/app.scss"
import * as bootstrap from "bootstrap"
import Invoice from "./Invoice"

const invoiceApp = new Invoice();
invoiceApp.init();
console.log(invoiceApp);


// test
// const myModal = document.querySelector("#exampleModal");
// const bsModal = new bootstrap.Modal(myModal);

// console.log(myModal);
// console.log(bsModal);

// bsModal.toggle()

// window.setTimeout(() => {
//     bsModal.toggle();
// },5000)