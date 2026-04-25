const readline = require('readline-sync'); 
/*
Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


// Fixed with explicit Number conversion so math is clear.
let firstNumber = Number("5");
let result = firstNumber - 2;
console.log("The result is: " + result);

// Fixed because Boolean("false") is true.
// This checks if the text is actually equal to "true".
let validText = "false";
let isValid = validText === "true";
if (isValid) {
  console.log("This is valid!");
} else {
  console.log("This is not valid!");
}

// Fixed with Number conversion so it adds instead of joining strings.
let age = Number("25");
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

// Implicit conversion example
let implicitValue = "5" + 2;
console.log(implicitValue);
console.log(typeof implicitValue);

// Explicit conversion example with edge case
let missingValue = undefined;
let convertedValue = Number(missingValue);
console.log(convertedValue);
console.log(typeof convertedValue);


let name = readline.question("What is your name? ");
console.log("Hello " + name);
