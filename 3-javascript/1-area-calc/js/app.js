// Selectors
const result = document.getElementById("result");
const width = document.getElementById("width");
const height = document.getElementById("height");
const calculate = document.getElementById("calculate");
const lists = document.getElementById("lists");
const storeBtn = document.getElementById("storeBtn");
const clearBtn = document.getElementById("clearBtn");

// function

const calculateArea = (w, h) => w * h;
// console.log(calculateArea(2,3));

const handleClick = () => {
  const area = calculateArea(width.valueAsNumber, height.valueAsNumber);
  result.innerHTML = `${width.value} ft * ${height.value} ft = ${area} sqft<sup>2</sup>`;
  width.value = null;
  height.value = null;
};

const store = () => {
  lists.innerHTML += `<li>${result.innerHTML}</li>`;
  result.innerHTML = null;
};

const clear = () => {
    lists.innerHTML = null;
};

calculate.addEventListener("click", handleClick);
storeBtn.addEventListener("click", store);
clearBtn.addEventListener("click", clear);
