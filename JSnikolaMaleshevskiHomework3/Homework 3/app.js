/*
*Write a javascript function for an ATM:
*The ATM should give cash
*Should return "Not enough money" if you request more money
*Should return the amount withdrawn and money left on the account if you have enough
*Note: Hardcode your account money in the program
*Bonus: Make it work with prompt()!
 */

console.log("Hello Friend");

function ATM(availableBalance,moneyWithdrawn){
    balanceLeft = availableBalance - moneyWithdrawn;
   
    if(moneyWithdrawn > availableBalance){
        console.log("INSUFFICIENT FUNDS");
    } else {
        console.log("TRANSACTION SUCCESSFUL, YOU HAVE " + "$" + balanceLeft + " remaining!");
    }
}




let accountBalance = 10000;
let withdrawalPrompt = prompt('How much money would you like to withdraw?:');



if (isNaN(withdrawalPrompt)){
    console.log("Please enter a valid number amount.");
} else {
    ATM(accountBalance,parseFloat(withdrawalPrompt));
};



