console.log("CONNECTED");

/*
* FILTER ODD/EVEN NUMBERS FUNCTION
*Write a function named findNumber that:
*Takes 2 arguments: array, type
*The person that calls the function should provide an array of numbers and string odd / even
*If the type is even the function should find all the even numbers and return them as result
*If the type is odd the function should find all the odd numbers and return them as result
*/

let numbersArray = [2, 5, 3, 5, 3, 6, 34, 254, 6, 434, 764, 834, 235, 7645, 21354, 76, 321, 745, 45];
let userInput = prompt("Choose ODD or EVEN:");

function findNumber(array, type){
    let result = [];
    for(i=0; i<array.length; i++){
        if(type.toUpperCase() === "ODD"){
            if(array[i]%2 !== 0){
                result.push(`${array[i]}`)
            } else{}
        } else if (type.toUpperCase() === "EVEN"){
            if(array[i]%2 === 0){
                result.push(`${array[i]}`)
            } else{}
        } else {
            result = `INVALID INPUT`;
        }
    }

    let resultAsString = result.join(', ')

    console.log(result);
    console.log(resultAsString);
};

findNumber(numbersArray, userInput);














