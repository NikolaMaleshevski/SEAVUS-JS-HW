/**
 * CREATE A DYNAMIC TABLE
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :)
 */

let rowInput = parseFloat(prompt("Input the amount of rows you need:"));
let columnInput = parseFloat(prompt("Input the amount of columns you need"));

let table = document.getElementById('table');






function buildTable(amountOfColumns){
    let columns = '';
    let rows = "";

    for(i=1; i<=amountOfColumns; i++){
        columns += `<td>Column ${i}</td>`
    }

    for(i=1; i<=rowInput; i++){
        rows += `<tr>${columns}</tr>`
    }

    return rows
};

table.innerHTML = buildTable(columnInput);
