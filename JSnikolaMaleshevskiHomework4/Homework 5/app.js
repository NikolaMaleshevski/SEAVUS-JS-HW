console.log("CONNECTED");

/**
 * Write a JavaScript function that will return:
*The sum of the MAX and MIN numbers from an array with numbers
*Ex: arr = [3, 5, 6, 8, 11]
*Output: Max: 11, Min: 3, Sum: 14

*Bonus: Try making the function work if there are other types of items in it
 */

function minMaxSum(arrayOfNumbers){
    let i = 0;
    let min = arrayOfNumbers[0];
    let max = arrayOfNumbers[0];
    let result = min + max;

    while(i < arrayOfNumbers.length){
        if(arrayOfNumbers[i] >= max){
            max = arrayOfNumbers[i]
            i++
        } else if(arrayOfNumbers[i] <= min){
            min = arrayOfNumbers[i]
            i++
        }  else if(isNaN(arrayOfNumbers[i])){
            i++
        } else {
            i++
        }
    }
    
    console.log(`${min} + ${max} = ${result}`) ;
}

let numbers = [3, 4, 2, 58, "Starsky", 784, -1, 5, 34, "Hutch", -76];

minMaxSum(numbers);