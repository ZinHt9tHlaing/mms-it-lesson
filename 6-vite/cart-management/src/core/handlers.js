import Swal from "sweetalert2";
import { productRender, removeCartAddedBtn } from "../app/product";
import { app, cartTotalAmount, cartUi } from "./selectors";
import { products } from "./variables";

export const searchBtnHandler = () => {};

export const cartBtnHandler = () => {
  cartUi.classList.toggle("translate-x-full");
  cartUi.classList.add("duration-300");
};

export const categoryListHandler = (event) => {
  if (event.target.classList.contains("categories-badge")) {
    const currentCategoryBtn = event.target;
    const currentCategory = currentCategoryBtn.innerText.toLowerCase();
    const lastActiveCategoryBtn = app.querySelector(".categories-badge.active");
    lastActiveCategoryBtn.classList.toggle("active");

    // console.log(currentCategory);

    currentCategoryBtn.classList.add("active");
    productRender(
      products.filter(
        (product) =>
          product.category === currentCategory || currentCategory === "all"
      )
    );
  }
};

export const orderNowHandler = (event) => {
  Swal.fire({
    title: "Are you sure to order?",
    text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    cancelButtonText: "Cancel",
    confirmButtonText: "Confirm",
  }).then((result) => {
    // customer_id, productId, quantity, total, time
    if (result.isConfirmed) {
      const customer_id = Math.floor(Math.random() * 10000);
      const total = parseFloat(cartTotalAmount.innerText);
      const time = Date.now();
      const order_items = [];
      app.querySelectorAll(".cart-item").forEach((el) => {
        const productId = parseFloat(el.getAttribute("product-id"));
        const quantity = parseFloat(el.querySelector(".cart-q").innerText);
        order_items.push({
          product_id: productId,
          quantity: quantity,
        });
        el.remove();

        removeCartAddedBtn(productId);
      });
      const order = { customer_id, total, time, order_items };
      console.log(order);
    }
  });
};

export const searchHandler = (text) => {
  productRender(products.filter(product => product.title.toLocaleLowerCase().search(text.toLocaleLowerCase()) >=0))
};
