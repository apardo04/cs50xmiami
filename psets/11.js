/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...
function calculateAge(birth, current) {
  var result1 = current - birth - 1;
  var result2 = result1 + 1;
  return [result1, result2];
}

var results = calculateAge(1990,2015);
console.log("You are either " + results[0] + " or " + results[1]);

var results = calculateAge(1969,2015);
console.log("You are either " + results[0] + " or " + results[1]);

var results = calculateAge(1900,2015);
console.log("You are either " + results[0] + " or " + results[1]);
