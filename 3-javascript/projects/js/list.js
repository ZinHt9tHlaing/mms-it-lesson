// selectors

const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneListCounter = document.querySelector("#doneListCounter");
const totalListCounter = document.querySelector("#totalListCounter");
const lists = document.querySelector("#lists");

// functions

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const makeRandomId = (length) => {
  let char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i <= length; i++) {
    result += char[getRndInteger(0, char.length)];
  }
  return result;
};
// console.log(makeRandomId(5));
// console.log(makeRandomId(7));
// console.log(makeRandomId(15));

// console.log(getRndInteger(0,61));

const countList = () => {
  const totalList = lists.querySelectorAll(".list").length;

  totalListCounter.innerText = totalList;

  doneListCounter.innerText = lists.querySelectorAll(
    ".list-checker [type='checkbox']:checked"
  ).length;

  if (totalList === 0) {
    lists.innerHTML = `<p class='text-center fw-semibold empty-stage'>There is no List</p>`;
  } else {
    // lists.querySelector(".empty-stage") &&
    //   lists.querySelector(".empty-stage").remove();

    lists.querySelector(".empty-stage")?.remove()
  }
};

const createList = (listText) => {
  const checkerId = makeRandomId(5);

  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = `
    
  <div
    class="border border-2 border-primary p-3 d-flex justify-content-between align-items-center mb-3"
>
  <div class="form-check list-checker">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="${checkerId}"
    />
    <label class="form-check-label list-label" for="${checkerId}">
      ${listText}
    </label>
  </div>

  <div class="list-control">
    <button class="btn btn-outline-primary list-edit-btn">
      <i class="bi bi-pencil-fill"></i>
    </button>
    <button class="btn btn-outline-primary list-del-btn">
      <i class="bi bi-trash3-fill"></i>
    </button>
  </div>
</div>

    `;
  const listDelBtn = list.querySelector(".list-del-btn");
  listDelBtn.addEventListener("click", () => {
    // console.log("U can Delete");
    const decision = window.confirm("U really should delete this?");
    decision && list.remove();

    countList();
  });

  const listChecker = list.querySelector(".list-checker");
  listChecker.addEventListener("click", () => {
    // console.log("U can check this");
    countList();
  });

  const listEditBtn = list.querySelector(".list-edit-btn");
  const listLabel = list.querySelector(".list-label");

  listEditBtn.addEventListener("click", () => {
    console.log("U can Edit");
    const editInput = document.createElement("input");
    editInput.value = listLabel.innerText;
    editInput.classList.add("form-control");

    listLabel.innerText = null;
    listLabel.append(editInput);

    editInput.addEventListener("blur", () => {
      listLabel.innerText = editInput.value;
    });
  });

  return list;
};

// process

countList();

addBtn.addEventListener("click", () => {
  // console.log(textInput.value);
  lists.append(createList(textInput.value));

  countList();

  textInput.value = null;
});

const obj = {
  a: "aaa",
  b: "bbb",
  c: {
    x: "xxx",
    y: "yyy",
    z: "zzz",
  },
};

console.log(obj.a);
console.log(obj.b);
