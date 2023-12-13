/**
 * Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well
 */


console.log("Hello Friend");


let userChoice = prompt("To convert dog to human years type D, to convert human to dog years type H");

let userNumberInput = prompt("Input number of years:");

function HumanToDog(humanYearsParameter){
    let dogYears = humanYearsParameter * 7;
    return dogYears;
}

function DogToHuman(dogYearsParameter){
    let humanYears = dogYearsParameter / 7;
    return humanYears;
}



 if(isNaN(userNumberInput)){
    console.log("Please enter a valid number")
 }else if(userChoice == 'D' || userChoice == 'd'){
    console.log(DogToHuman(parseFloat(userNumberInput)));
} else if(userChoice == 'H' || userChoice == 'h'){
    console.log(HumanToDog(parseFloat(userNumberInput)));
} else {
    console.log("Please either type in H or type in D");
};
