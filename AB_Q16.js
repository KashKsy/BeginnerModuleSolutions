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

  let dummy= userInput[0].split(" ");
let P=dummy[0];
let T=dummy[1];
let R=dummy[2];
var SI= P * T * (R/100) ;

console.log(SI.toFixed(2));

  //end-here
});