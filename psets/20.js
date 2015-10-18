/*
Your top choices

Create an array to hold your top choices (colors, presidents, whatever).
- For each choice, log to the screen a string like: "My #1 choice is blue."

- Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
  picking the right suffix for the number based on what it is.
*/

// write your solution here...
var array = ["red", "blue", "green"]

  /*array["colors"]= "blue", "red", "green";
  array["presidents"] = ["Lincoln", "Obama"];
  array["games"] = ["Fallout 4", "League of Legends", "ESO"];*/


for (var i = 0; i < array.length; i++) {
  //for (var j = 0; j < array[i].length; j++) {
   var suffix = "nothing";
    switch (i) {
      case 0: //1st
        suffix = "st";
        break;
      case 1: //2nd
        suffix = "nd";
        break;
      case 2: //3rd
        suffix = "rd";
        break;
      case 3: //4th
        suffix = "th";
        break;
      default:
        suffix = "th";
      }
      console.log("My " + (i + 1) + suffix + " choice: " + array[i]);
  //}
}
//console.log(array.length);
