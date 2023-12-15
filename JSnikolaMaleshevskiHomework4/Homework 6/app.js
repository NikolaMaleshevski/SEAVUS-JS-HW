console.log("CONNECTED");

/**
 * Write a javascript function that:
*When given 2 arrays of students firstNames and lastNames will return a new array with students full names
*Every name should have a numeric value before it
*Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
*Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
 */

function fullNameGenerator(firstNames, lastNames){
    fullNames = [];
    let numeratorofNames = 1;
    for(i=0; i<firstNames.length && i<lastNames.length; i++){
        fullNames.push(`${numeratorofNames++}. ${firstNames[i]} ${lastNames[i]}`)
    }
    return fullNames;
}

firstNamesList = ["Jimmy", "Javier", "Branko", "Stanko", "Panko"];
lastNamesList = ["Hopkins", "Escuella", "Grankov", "Dupev", "Veliki"];

console.log(fullNameGenerator(firstNamesList, lastNamesList));