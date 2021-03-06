/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...
var r = 3;
var diameter = 2 * r;
var circ = Math.PI * diameter;
var area = Math.PI * (r*r);

console.log("The circumference is " + circ + ".");
console.log("The area is " + area + ".");
