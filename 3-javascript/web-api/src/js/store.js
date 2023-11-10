// console.log(JSON);

// const fruits = ["apple", "orange", "mango", "banana"];

// // array
// // console.log(fruits);

// // array => json
// console.log(typeof JSON.stringify(fruits));

// // json => array
// const jsonStr = JSON.stringify(fruits);
// console.log(typeof JSON.parse(jsonStr));

// Selectors
const result = document.getElementById("result");
const width = document.getElementById("width");
const height = document.getElementById("height");
const calculate = document.getElementById("calculate");
const lists = document.getElementById("lists");
const storeBtn = document.getElementById("storeBtn");
const clearBtn = document.getElementById("clearBtn");

// state data

let records;
if (localStorage.getItem("records")) {
  records = JSON.parse(localStorage.getItem("records"));
} else {
  records = [];
}

calculate.addEventListener("click", () => {
  const result = width.valueAsNumber * height.valueAsNumber;
  const record = {
    width: width.valueAsNumber + "ft",
    height: height.valueAsNumber + "ft",
    result: result + "sqft",
  };

  // ui create
  lists.append(createList(record));

  // store
  records.push(record);

  width.value = null;
  height.value = null;


  const rawJson = JSON.stringify(records);
  localStorage.setItem("records", rawJson);
});

const createList = ({ width, height, result }) => {
  const li = document.createElement("li");
  li.innerHTML = `${width} * ${height} = ${result}`;
  return li;
};

records.forEach((r) => lists.append(createList(r)));
