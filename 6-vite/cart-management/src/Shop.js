import { cartObserver } from "./app/cart";
import { categoryRender } from "./app/category";
import { productRender } from "./app/product";
import {
  cartBtnHandler,
  categoryListHandler,
  orderNowHandler,
  searchHandler,
} from "./core/handlers";
import { cartBtn, categoryLists, orderNow, searchBtn } from "./core/selectors";
import { categories, products } from "./core/variables";

export class Shop {
  // preRender() {
  //   fetch("http://localhost:5173/api/categories")
  //     .then((res) => res.json())
  //     .then((json) => categoryRender(json));

  //   fetch("http://localhost:5173/api/products")
  //     .then((res) => res.json())
  //     .then((json) => productRender(json));
  // }

  async preRender() {
    const res = await fetch("http://localhost:5173/api/categories");
    const json = await res.json();
    categoryRender(json);

    const productRes = await fetch("http://localhost:5173/api/products");
    const productJson = await productRes.json();
    productRender(productJson);
  }

  listener() {
    cartBtn.addEventListener("click", cartBtnHandler);
    closeCart.addEventListener("click", cartBtnHandler);
    categoryLists.addEventListener("click", categoryListHandler);
    orderNow.addEventListener("click", orderNowHandler);
    searchBtn.addEventListener("click", () => {
      searchHandler("wo");
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
