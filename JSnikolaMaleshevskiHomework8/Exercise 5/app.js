/**
 * Bob's salary is 1000 eur per month.
 *  He has expenses that has to cover during the month.
 *  He has to pay rent for his apartment 375 eur.
 *  He should pay 250 eur for his bills in total.
 *  Print on screen what is the amount left that Bob has for the rest of the month,
 *  and what is the total amount of his expenses.
 */
let salaryElement = document.getElementById("salary");
let rentElement = document.getElementById("rent");
let billsElement = document.getElementById("bills");
let totalExpensesElement = document.getElementById("totalExpenses");
let totalLeftElement = document.getElementById("totalLeft");

let salary = 1000;
let rent = 375;
let bills = 250;
let expenses = rent + bills;
let totalLeft = salary - rent - bills;

salaryElement.innerText = `Bob's salary is ${salary} euros`;
rentElement.innerText = `Bob pays ${rent} euros for rent`;
billsElement.innerText = `He also pays ${bills} euros for bills`;
totalExpensesElement.innerText = `His total expenses are ${expenses} euros`;
totalLeftElement.innerText = `He has ${totalLeft} euros left`;