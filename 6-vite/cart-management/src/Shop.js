import { categoryRender } from "./app/category";
import { productRender } from "./app/product";
import { cartBtnHandler } from "./core/handlers";
import { cartBtn } from "./core/selectors";
import { categories, products } from "./core/variables";

export class Shop {
  preRender() {
    categoryRender(categories);
    productRender(products);
  }

  listener() {
    cartBtn.addEventListener('click', cartBtnHandler);
    closeCart.addEventListener('click', cartBtnHandler);
  }

  init() {
    console.log("Shop App starts");
    this.preRender();
    this.listener();
  }
}
