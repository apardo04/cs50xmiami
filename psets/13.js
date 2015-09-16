/*
The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...
function calcCircumfrence(r) {
  return (2 * r) * Math.PI;

}

function calcArea(r) {
  return Math.PI * (r*r);
}

console.log("The circumference is " + calcCircumfrence(3) + ".");

console.log("The area is " + calcArea(5) + ".");
