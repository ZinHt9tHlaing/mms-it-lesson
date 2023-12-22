// const x = 10;
// const y = 5;
// console.log(x + y);

// const fs = require("fs");

// // Specify the file name and content
// const fileName = "my.txt";
// const fileContent = "Hello, My name is Zin Htet Hlaing";

// // Use the writeFile function to create the file
// fs.writeFile(fileName, fileContent, (err) => {
//   if (err) {
//     console.error("Error creating file:", err);
//   } else {
//     console.log("File created successfully!");
//   }
// });

const fs = require("fs");

// Specify the file name
const fileName = "data.json";

// Use the readFile function to read the file
fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log(JSON.parse(data));
  }
});
