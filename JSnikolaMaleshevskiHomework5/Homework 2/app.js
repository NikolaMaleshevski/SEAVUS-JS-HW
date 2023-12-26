/**
 * Create an array with numbers
Print all numbers from the array in a list element, in a new HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)
 */

numbersArray = [1, 5, 2, 7, 'trig', 3, 6, 3, 6]

let myDiv = document.getElementById("myDiv");

function sum(arrayOfNumbers){

    let content = "";
    let result = 0;
    let endMessage = "";

    content += "<ul>"

    for(let i=0; i<arrayOfNumbers.length; i++){
        if(typeof arrayOfNumbers[i] === "number"){
            content += `<li>${arrayOfNumbers[i]}</li>`
            result = result + arrayOfNumbers[i]
            endMessage += `${arrayOfNumbers[i]} + `
        }
    }

    endMessage = endMessage.slice(0, -2)
    content += '</ul>'
    content += `${endMessage} = ${result}`;

    myDiv.innerHTML = content
}

sum(numbersArray);