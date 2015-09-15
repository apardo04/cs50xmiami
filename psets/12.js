/*
The Lifetime Supply Calculator part 2

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
- takes 2 arguments: age, amount per day.
- calculates the amount consumed for rest of the life (based on a constant max age).
- outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

// write your solution here...
function calculateSupply (age, amount) {
  var result = (90 - age) * Math.round(amount);
  return result;
}

var results = calculateSupply(24, 3.5);
console.log("You will need " + results + " to last you until the ripe old age of " + 90);

var results = calculateSupply(89, 100);
console.log("You will need " + results + " to last you until the ripe old age of " + 90);

var results = calculateSupply(12, 3.14);
console.log("You will need " + results + " to last you until the ripe old age of " + 90);
