// function triangle (){
//   console.log("*");
//   console.log("* * ");
//   console.log("* * *");
//   console.log("* * * *");
// }

// triangle();
// triangle();
// triangle();

// function inchesToFeet(inches = 0){
//   let result = inches / 12;
//   return result + " ft";
// }

// console.log(inchesToFeet(60));
// console.log(inchesToFeet(120));
// console.log(inchesToFeet(90));
// console.log(inchesToFeet());

// let results = [];
// let count = 0;

// function calculateArea(width, breadth) {
//   let resultArea = width * breadth;
//   let areaUnit = "sqft";
//   let area = resultArea + areaUnit;
//   let resultObject = {
//     width: width + "ft",
//     breadth: breadth + "ft",
//     area,
//   };

//   results[count++] = resultObject;
//   // results.push(resultObject);

//   return area;
// }

// console.log(calculateArea(19, 70));
// console.log(calculateArea(12, 50));
// console.log(calculateArea(12, 50));

// console.table(results);

// let rates = {
//   usd: 2100,
//   eur: 2200,
//   sgd: 1500,
// };

// 1 usd = 2100 mmk

// 100 USB to mmk

// function exchangeToMmk(amount, fromCurrency) {
//   let currentExchangeRate = rates[fromCurrency];
//   let resultAmount = amount * currentExchangeRate;
//   return resultAmount + " mmk";
// }

// console.log(exchangeToMmk(100, "usd"));
// console.log(exchangeToMmk(500, "eur"));
// console.log(exchangeToMmk(35, "sgd"));

// 50000 mmk to usd

// function exchangeToCurrency(amount, toCurrency) {
//   let currentExchangeRate = rates[toCurrency];
//   let resultAmount = amount / currentExchangeRate;
//   return resultAmount + " " + toCurrency;
// }

// console.log(exchangeToCurrency(500000, "usd"));
// console.log(exchangeToCurrency(70000, "sgd"));
// console.log(exchangeToCurrency(1230000, "eur"));

// let fruits = {
//   apple: 500,
//   orange: 450,
//   mango: 1000,
//   banana: 200,
// };

// let records = [];
// let count = 0;
// let total = 0;

// function calculateTax(amount, percentage = 5) {
//   return amount * (percentage / 100);
// }

// function calculateCost(item, quantity) {
//   let calculateItemPrice = fruits[item];
//   let cost = quantity * calculateItemPrice;
//   records[count++] = {
//     item,
//     quantity,
//     cost,
//   };

//   total += cost;
//   return cost + " mmk";
// }

// console.log(calculateCost("apple", 5));
// console.log(calculateCost("orange", 15));
// console.log(calculateCost("mango", 3));
// console.log(calculateCost("banana", 3));

// console.table(records);
// console.table({
//   total,
//   tax: calculateTax(total),
//   subTotal: total + calculateTax(total),
// });

// function run() {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// };

// console.log(run());

// (function () {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// })();

// let x = function () {
//   return "x";
// };

// let y = function () {
//   return "y" + x();
// };

// console.log(y());

let x = 5;
const y = 10;

function run() {
  console.log(x);
  console.log(y);
}

console.log(x, y);

var z = 15;
function run(){
  console.log(z);
}

console.log(z);
console.log(run());
