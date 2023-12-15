console.log("CONNECTED");

/**
 * Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number.
 If one of the numbers of the array is invalid show an error message instead of a result.
 */

 //Бонусот е имплементиран во самата функција, kind of.


let first = prompt("First Number:")
let second = prompt("Second Number:")
let third = prompt("Third Number:")
let fourth = prompt("Fourth Number:")
let fifth = prompt("Fifth Number:")

let numbers = [first, second, third, fourth, fifth];

function sum(arrayOfNumbers){
    let i = 0;
    result = arrayOfNumbers[0] * arrayOfNumbers[1] * arrayOfNumbers[2] * arrayOfNumbers[3] * arrayOfNumbers[4];
    while(i < arrayOfNumbers.length){
        if(isNaN(arrayOfNumbers[i])){
            console.log("ERROR")
            return;
        } else {
            i++
        }
    }
    return result;
}

if(!isNaN(sum(numbers))){
    console.log(sum(numbers));
} else {
    console.log("INVALID INPUT")
};

