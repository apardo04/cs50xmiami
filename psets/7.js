/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

//still not working!!!!----!!!--!-!_!_!_

function fixStart(s) {
  /*var char = s.charAt(0);
  var s2 = char;
  for (var i = 1; i < s.length; i++) {
    if (s[i] == char) {
      s2=s2+ '*';
    }
    else {
      s2 = s2+ s[i];
    }
  }
  return s2;*/
  return s[0]+s.substring(1).replace(RegExp(s[0],'g'),"*");
}

var word = "babble";
var fix = fixStart(word);
console.log(fix);
