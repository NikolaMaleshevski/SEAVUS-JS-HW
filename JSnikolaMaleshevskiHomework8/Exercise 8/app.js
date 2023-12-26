/**
 * Write a JavaScript function called storyTeller(), that will take as an input parameters the input fields values from the html!

ex: storyTeller(who, what, when);

In the function, retrieve the current values of the form input elements, make a story from them, and output that in the story div 
(like "Example: Lancelot was a really strong knight in the middle age!")
 */


let storyField = document.getElementById("storyField"); 


function storyTeller(whoPar, whatPar, whenPar) {
    let story = `${whoPar} was a ${whatPar} in ${whenPar}`
    return story;
};


function generateStory() {
    let who = document.getElementById('who').value;
    let what = document.getElementById('what').value;
    let when = document.getElementById('when').value;
    storyField.innerHTML = `<h2>${storyTeller(who, what, when)}</h2>`;
};


    

