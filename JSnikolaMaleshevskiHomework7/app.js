/**
 * CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt or from HTML inputs
*/


let dog = {
    name:"Ruffer",
    kind:"Dangerous",
    speak: function(whatDoesTheDogSay){
        console.log(`Ruffer says: ${whatDoesTheDogSay}`);
    }
}
dog.speak("Boss finna be boss, don finna be don");



// BONUS EXERCISE

let text = document.getElementById("text")
let customName = prompt("Whats your animal's name?");
let customKind = prompt("What kind of animal is it?");
let customSpeak = prompt("What does your animal say?");


let customAnimal = {
    name:customName,
    kind:customKind,
    speak: function(whatDoesCustomSay){
        text.innerText = `${this.name} the ${this.kind} says: ${whatDoesCustomSay}`
        console.log(`${this.name} the ${this.kind} says: ${whatDoesCustomSay}`)
    }
}
customAnimal.speak(customSpeak)





