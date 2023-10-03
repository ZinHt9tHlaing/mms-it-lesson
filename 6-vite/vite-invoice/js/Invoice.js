import { newItemFormHandler, printerHandler, recordFormHandler } from "./app/handlers";
import { newItemForm, recordForm } from "./app/selectors";
import { productItemRender, productOptionHandler } from "./products";

export default class Invoice {
  initialRender() {
    productOptionHandler();
    productItemRender();
  }

  listener() {
    recordForm.addEventListener("submit", recordFormHandler);
    newItemForm.addEventListener("submit", newItemFormHandler);
    printer.addEventListener("click", printerHandler);
  }

  init() {
    console.log("Invoice App start");
    this.listener();
    this.initialRender();
  }
}
