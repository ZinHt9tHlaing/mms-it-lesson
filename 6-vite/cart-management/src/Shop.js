import { cartObserver } from "./app/cart";
import { categoryRender } from "./app/category";
import { productRender } from "./app/product";
import { cartBtnHandler, categoryListHandler, orderNowHandler, searchHandler } from "./core/handlers";
import { cartBtn, categoryLists, orderNow, searchBtn } from "./core/selectors";
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
    orderNow.addEventListener("click", orderNowHandler);
    searchBtn.addEventListener("click", () => {
      searchHandler("wo")
    });
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
