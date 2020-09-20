// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

var area= 1/4* Math.sqrt(3)* Math.pow(userInput, 2);
console.log(area.toFixed(2));

  //end-here
});