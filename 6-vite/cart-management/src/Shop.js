import { cartObserver } from "./app/cart";
import { categoryRender } from "./app/category";
import { productRender } from "./app/product";
import { cartBtnHandler, categoryListHandler } from "./core/handlers";
import { cartBtn, categoryLists } from "./core/selectors";
import { categories, products } from "./core/variables";

export class Shop {
  preRender() {
    categoryRender(categories);
    productRender(products);
  }

  listener() {
    cartBtn.addEventListener("click", cartBtnHandler);
    closeCart.addEventListener("click", cartBtnHandler);
    categoryLists.addEventListener("click", categoryListHandler);
  }

  observer() {
    cartObserver();
  }

  init() {
    console.log("Shop App starts");
    this.observer();
    this.preRender();
    this.listener();
  }
}
