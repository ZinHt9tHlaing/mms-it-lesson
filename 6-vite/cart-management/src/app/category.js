import { categoryLists } from "../core/selectors";

export const categoryRender = (list) => {
  list.forEach((el) => categoryLists.append(createCategoryUi(el)));
};

export const createCategoryUi = (categoryName) => {
    const btn = document.createElement("button");
    btn.classList.add("categories-badge");
    btn.innerText = categoryName;
    return btn;
};
