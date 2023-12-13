console.log("Hello Friend");

/*
*takes 2 arguments: birth year, current year.
*Write a function named calculateAge that:
*calculates the age based on those years.
*outputs the result to the screen like so: "You are NN years old"
*Call the function three times with different sets of values.
*Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
 */



function calculateAge(birthYear, currentYear){
    console.log(`You were born in the year ${birthYear}.`)
    console.log(`The current year is ${currentYear}`)
    let yourAge = currentYear - birthYear;
    document.write(`You are ${yourAge} years old!`);
}

let birthYearInput = prompt("What Year Were You Born?");
let autoCurrentYear = new Date().getFullYear();

if (isNaN(birthYearInput)){
    console.log("Please enter a valid number!")
} else{
    calculateAge(parseFloat(birthYearInput), autoCurrentYear);
};






