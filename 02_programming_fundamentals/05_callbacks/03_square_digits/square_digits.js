// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

function squareDigits(number) {
  const numberToString = number.toString();
  const myArray = numberToString.split("");
  const myNewArray = [];
  myArray.map((element) => {
    const squareNumber = element*element;
    myNewArray.push(squareNumber);
    return(myNewArray);
  });
  const result = parseInt(myNewArray.join(""),10);
  //console.log(result);
  return(result);
}
squareDigits(2345);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;



/*
function squareDigits(number) {
  const numberString = number.toString();
  const digits = numberString
    .split("")
    .map((digitString)=>parseInt(digitString,10));
  const digitsSquared = digits.map((digit) => digit*digit);
  const digitJoined = digitsSquared.join("");
  return parseInt(digitJoined,10);
}
squareDigits(2345);
