/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."


°F to °C	Deduct 32, then multiply by 5, then divide by 9
°C to °F	Multiply by 9, then divide by 5, then add 32
*/
// write your solution here...
var ctemp = 30;
var ftemp = 100;
var ctof = (ctemp * 9) / 5 + 32;
var ftoc = (ftemp - 32) * 5 / 9;
console.log(ctemp + "°C is " + ctof + "°F");
console.log(ftemp + "°F is " + ftoc + "°C");
