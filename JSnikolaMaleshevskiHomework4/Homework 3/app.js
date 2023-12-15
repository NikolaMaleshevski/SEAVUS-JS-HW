console.log("CONNECTED");

/**
 * Write a javascript function that:
*When given any array of strings (should work with array with any number of elements)
*It will create one big string and return it
*Ex:["Hello", "there", "students", "of", "SEDC", "!"]
*Result: "Hello there students of SEDC!"
 */

function whateverThisIsCalled(arrayOfWords){
    let i = 0;
    let finishedString = ""
    while(i < arrayOfWords.length){
        finishedString = finishedString + arrayOfWords[i];
        i++
    }
    return finishedString;
}

let words = ['Say ', 'hello ', 'to ', 'my ', 'little ', 'friend '];

console.log(whateverThisIsCalled(words));


////////////////////////////////////////////                 OR                  ///////////////////////////////////////////////////////////



let words2 = ['Say', 'good', 'night', 'to', 'the', 'bad', 'guy'];

function SimplerWay(arrayOfWords){
    let result = arrayOfWords.join(' ');
    return result;
}

console.log(SimplerWay(words2));