/**
Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

object
boolean
number
string
undefined
 */

console.log("Hello Friend");
console.log("**********************************")

function whatTypeIsIt(parameter){
    console.log(typeof(parameter));
}

whatTypeIsIt(null);
whatTypeIsIt(true);
whatTypeIsIt(55);
whatTypeIsIt("Nevermind");
whatTypeIsIt();

