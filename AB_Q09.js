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
function noSeries(userinput)
{
  if(userInput === 0 || userInput == 1)
  {
    return 1;
  }
  else if(userInput < 0)
  {
    return "Error"
  }
  else
  {
    return Math.pow(userInput,2);
  }
}
 answer = noSeries(userInput);
  console.log(answer);

  //end-here
});