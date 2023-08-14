// function run(a, b) {
//     console.log(arguments);
//     return a + b;
// }

// const run = function (x, y) { return x + y };

// console.log(run(1,3,4,56,789));

// const f = new Function("x", "y", "return x+y");
// console.dir(f);
// console.log(f(2, 3));
// console.log(f.bind(null,1,2).apply());

// const x = f.bind(null, 1, 2);
// const y = x.apply();
// console.log(y);

// console.log(f.call(null,10,1));

function run(...rest) {
  console.log(rest);
  let total = 0;
  for (x of rest) {
    total += x;
  }
  return total;
}

// console.log(run(1, 2, 3, 4, 5));
// console.log(run(4,5,6,7));

function test(x, y, ...rest) {
  console.log(x);
  console.log(y);
  console.log(rest);
}

console.log(test(1, 2, 3, 4));
