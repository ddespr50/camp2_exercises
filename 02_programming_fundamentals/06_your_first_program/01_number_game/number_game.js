//library Readline
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//generate ramdom integer
const min = 1;
const max = 100;

function getRandomInt(min, max) {
//min = Math.ceil(min);
//max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}
//stock the number
const integerToFind = getRandomInt(min,max);
console.log(integerToFind);

//
let youWin = false;

//loop
function testOnNumber (userNumber) {
  if (isNaN(userNumber)){
    console.log("This was not a number");
  } else if (userNumber<min || userNumber>max) {
    console.log("The number is between 1 and 100");
  } else if (userNumber>integerToFind) {
    console.log("Too high");
  } else if (userNumber<integerToFind) {
    console.log("Too low");
  } else {
    console.log("You won!");
    youWin = true;
  }
}

//ask a number to user
let recursiveTest = function (){
  reader.question("What is your number? ", userNumber => {
    testOnNumber(userNumber);
    if (youWin === true){
      return reader.close() ;
    } else {
      recursiveTest();
    }
  });
};
recursiveTest();
//endofexercice
