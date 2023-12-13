let firstNumber = prompt("Write in the first number:")
let secondNumber = prompt("Write in the second number:")

function addition(addition1, addition2){
    let additionResult = parseFloat(addition1) + parseFloat(addition2);
    console.log(addition1 + "+" + addition2 + "=" + additionResult);
}
addition(firstNumber, secondNumber);


function subtraction(subtraction1, subtraction2){
    let subtractionResult = parseFloat(subtraction1) - parseFloat(subtraction2);
    console.log(subtraction1 + "-" + subtraction2 + "=" + subtractionResult);
}
subtraction(firstNumber, secondNumber);


function multiplication(multiply1, multiply2){
    let multiplicationResult = parseFloat(multiply1) * parseFloat(multiply2);
    console.log(multiply1 + "x" + multiply2 + "=" + multiplicationResult);
}
multiplication(firstNumber, secondNumber);

function division (division1, division2){
    let divisionResult = parseFloat(division1) / parseFloat(division2);
    console.log(division1 + "/" + division2 + "=" + divisionResult);
}
division(firstNumber, secondNumber);