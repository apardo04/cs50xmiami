/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/
function verbing(word) {
  var len = word.length;
  //var pop = word.split("_").pop();
  if (len < 3) {
    return word;
  }
  else if (len > 2) {
    if (word.substr(len - 3) == "ing") {
      return word + "ly";
    }
    else {
      return word + "ing";
    }
  }
}

var string = "swimming";
var verbed = verbing(string);
console.log(verbed);
