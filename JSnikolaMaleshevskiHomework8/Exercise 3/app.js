console.log("CONNECTED");

let numberInput = prompt("Please input a number:");
let numberParsed = parseFloat(numberInput);

function exercise(givenNumber){
    result = givenNumber - 13
    if(givenNumber > 13){
        console.log(result * 2)
    } else{
        console.log(result)
    }
}
exercise(numberParsed);