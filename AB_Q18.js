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

let A = parseFloat(userInput);

function oddEven(A)
{
    if (A%2 === 0)
    {
        return "Even";
    }
    else (A%2 !== 0)
    {
        return "Odd";
    }
}
answer=oddEven(A);
console.log(answer);
  //end-here
});