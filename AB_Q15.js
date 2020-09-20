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
let A=parseInt(userInput);  

function days(A)
{
    if(A===0 || A>12)
    {
        return "Error";
    }
    else if (A===2)
    {
        return "28";
    }
    else if (A===1, 3, 5, 7, 8, 10, 12)
    {
        return "31";
    }
    
}

answer = days(A);
console.log(answer);
  //end-here
});