/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...
function pluralize(noun, number) {
  if (number == 1) {
    return number + " " + noun;
  }
  else if (number > 1 && noun.toLowerCase() == "goose") {
    return number + " " + "Geese";
  }
  else if (number > 1) {
    return number + " " + noun + "s";
  }
}

console.log(pluralize("dog", 1));
console.log(pluralize("cat", 4));
console.log(pluralize("goose", 4));
