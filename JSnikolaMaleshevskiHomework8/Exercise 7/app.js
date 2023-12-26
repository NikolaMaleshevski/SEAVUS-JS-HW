console.log("CONNECTED");

let myArray = [null, undefined, NaN, "", false, 5, "Hello", true, {}, []];

function exercise(arrayOfValues){
    let noFalsyArray = arrayOfValues.filter(Boolean);
    return noFalsyArray
}

console.log(exercise(myArray));

//.filter najden na internet, sekako znaete :D