/**
 * Create a recipe page from inputs

Ask the user for the name of the recipe
Ask the user how many ingredients do we need for the recipe
Ask the user for the name of every ingredient
Print the name of the recipe in the HTML as heading element, ex: h1-h6
Print all ingredients as an unordered list in the HTML
Extra: Use a table if you want to be fancy :)
 */

let recipeName = prompt("What is the name of your recipe?");
let HTMLrecipeName = document.getElementById("title");
HTMLrecipeName.innerText = recipeName;

let recipeIngredientsNumber = parseFloat(prompt("How many ingredients does this meal have?"));

let tableOfIngredients = document.getElementById("tableOfIngredients");
let content = "";

if(typeof recipeIngredientsNumber === "number"){
    for(i=0;i<recipeIngredientsNumber;i++){
    content += `<tr><td>${prompt("Add ingredient to list")}</td></tr>`
    }
}

tableOfIngredients.innerHTML = content;


