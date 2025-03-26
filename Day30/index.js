// console.log(process.argv); //helps to print the arguments passed to the script in the terminal
// console.log(process.argv[2]); //helps to print the first argument passed to the script in the terminal

const value = require("./math.js");
console.log(value.sum(2, 3));

const apple = require("./Fruits/fruits.js");
console.log(apple.name);
