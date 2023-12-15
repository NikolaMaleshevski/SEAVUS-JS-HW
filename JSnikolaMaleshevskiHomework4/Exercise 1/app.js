console.log("CONNECTED");

/**
 * How many times is a number contained in an array

*Write a function named findNumber that:
*Takes 2 arguments: number, array
*Calculates how many times the number is contained in an array with numbers
*Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
*Call the function three times with different arrays.

 */

let numbersArray = [2, 5, 2, 7, 2, 6, 4, 6, 2];
let numbersArray1 = [4, 7, 4, 7, 2, 7, 3];
let numbersArray2 = [22, 44, 24, 53, 32, 22]



function findNumber(number, array){
    let i = 0;
    let amountFound = 0;
    while(i < array.length){
        if(array[i] === number){
             amountFound++;
             i++;
        } else{
            i++
        }
    }
    console.log(`There are ${amountFound} occurences of the number ${number} in the array`);
    i = 0;
};



findNumber(2, numbersArray);
findNumber(7, numbersArray1);
findNumber(22, numbersArray2);
