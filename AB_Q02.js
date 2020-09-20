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

function factorial(userInput)
{  

if (userInput== 1 || userInput===0)
{
    return 1;
}
else
{ 
  return userInput*factorial(userInput-1);
}
}
  answer = factorial(userInput);
 console.log(answer);


  //end-here
});

