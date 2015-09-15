/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

var ctemp = 34;
var ftemp = 100;
console.log(ctemp + "°C is " + Math.floor(celsiusToFahrenheit(ctemp) * 100) / 100 + "°F");
console.log(ftemp + "°F is " + Math.floor(fahrenheitToCelsius(ftemp) * 100) / 100 + "°C");
