import { inventoryBtnHandler, newItemFormHandler, printerHandler, recordFormHandler } from "./app/handlers";
import { inventoryBtn, newItemForm, recordForm } from "./app/selectors";
import { productItemRender, productOptionHandler } from "./products";
import { recordObserver } from "./record";

export default class Invoice {

  observer() {
    recordObserver();
  }

  initialRender() {
    productOptionHandler();
    productItemRender();
  }

  listener() {
    recordForm.addEventListener("submit", recordFormHandler);
    newItemForm.addEventListener("submit", newItemFormHandler);
    printer.addEventListener("click", printerHandler);
    inventoryBtn.addEventListener("click", inventoryBtnHandler);
  }

  init() {
    console.log("Invoice App start");
    this.observer();
    this.listener();
    this.initialRender();
  }
}
