/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...
function greaterNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else if (num2 > num1) {
    return num2;
  }
  else {
    return "none, they're the same."
  }
}

var num1 = 5;
var num2 = 10;

console.log("The greater number of " + num1 + " and " + num2 + " is " + greaterNum(num1,num2));
