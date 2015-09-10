/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

-----------NOT DONE
*/

function notBad(sentence) {
  var not = new RegExp("not");
  var bad = new RegExp("bad");
  if (not.test(sentence) && bad.test(sentence)) {
    return sentence.substring(0).replace(RegExp("not", 'gi'), "good");
  }
  else {
    return sentence;
  }
}

var sentence = "This dinner is not so bad!"

console.log(notBad(sentence));
