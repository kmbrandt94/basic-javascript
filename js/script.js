/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */

function sayHello() {

    // Make a variable called name and set it to your first name.
    var varName = "Kyle";

    //Make a variable called message and using the name variable from above,
    // set it to be something like:  "Hello, Mary.  Very nice to meet you."
    var msgOne = "Hello, "
    var msgTwo = varName;
    var msgThree = ". It is very nice to meet you!";
    var varMessage = (msgOne + msgTwo + msgThree);

    // Log the message to the console.  Use console.log()
    console.log(varMessage);
}

function evenOrOdd() {


    // Make a variable called number, and set it to a number between 1 and 10
    var varNum = 7;

    // Write a message (not just the number) to the console saying the value of the number
    console.log(varNum);

    // Use the modulus operator and an if statement to display a message
    // in the console that says whether the number is even or odd
    if (varNum % 2 == 1) {
        console.log("The Number Is Odd");
    } else {
        console.log("The Number Is Even");
    }



}

function countToTen() {

    // Write a for loop to count from 1 to 10
    /// Use console.log() inside the loop to write out each number
    for (var i = 1; i < 11; i++) {
        console.log(i);

    }

}

function addNumbers() {

    // Make an array of 5 numbers, at least one number should be negative
    var varArray = [-1, 0, 1, 2, 3]

    // Write the array to the console
    console.log(varArray);

    // Make a variable called total, set it to 0
    var varTotal = 0;

    // Use a for loop to set total to the sum of all of the numbers in the array
    sum = 0;
    for (var i in varArray) {
        varTotal += varArray[i];
    }

    // Write a message to the console saying the value of total
    console.log(varTotal);

    // Use an if statement to write a message to the console that says
    // whether total is greater than, less than, or equal to 50.
    if (varTotal < 50) {
        console.log("the Number Is Less Than 50");
    } else if (varTotal > 50) {
        console.log("The Number Is Greater Than 50");
    } else(varTotal = 50)
    console.log("The Number Is Equal To 50");
}







/*
 * DO NOT MODIFY THE CODE BELOW
 */
assignmentName = "HW1 - Basic JavaScript"
console.log(assignmentName);
console.log();

console.log("Say Hello");
sayHello();
console.log();

console.log("Even or Odd");
evenOrOdd();
console.log();

console.log("Count to 10");
countToTen();
console.log();

console.log("Add Numbers");
addNumbers();
console.log();