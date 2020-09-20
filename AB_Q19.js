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

let a=parseInt(userInput);
var s="";
for(i=1; i<=a; i++)
{
    result = i * 9;
    s += result + " ";
    var b= s.trim();
}
console.log(b);

  //end-here
});