let userInput = prompt("How much money do you have (in denars):");

console.log(userInput);

let parsedUserInput = parseFloat(userInput);

if(parsedUserInput >= 100 && parsedUserInput < 500){
    console.log("You should buy me a coffe")
} else if(parsedUserInput >= 500 && parsedUserInput < 1000){
    console.log("You should buy me a sandwich")
} else if(parsedUserInput >= 1000 && parsedUserInput < 10000){
    console.log("You should buy me a couple beers")
} else if(parsedUserInput >= 10000 && parsedUserInput < 100000){
    console.log("You should think about lending me some money")
} else if(parsedUserInput >= 100000 && parsedUserInput < 1000000){
    console.log("You should definetely invest in blockbuster video")
} else if(parsedUserInput >= 1000000){
    console.log("Ne se stiskaj davaj")
} else{
    console.log("Get a job.")
};