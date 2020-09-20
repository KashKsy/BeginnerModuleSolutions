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
let A = parseInt(userInput);

function leapYear(A)
{
    if (A%4 === 0)
    {
        return "Y";
    }
    else if(A%4!==0)
    {
        return "N";
    }
    
}
answer = leapYear(A);
console.log(answer);
 

  //end-here
});