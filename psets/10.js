/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
function tellFortune(kids, partner, geo, job){
  return "You will be a " + job + " in " + geo + ", and married to " + partner + " with " + kids + " kids.";
}

console.log(tellFortune(2, "mileini", "miami", "programmer"));
console.log(tellFortune(20, "some chick", "SF", "programmer"));
console.log(tellFortune(0, "idk", "miami", "programmer"));
