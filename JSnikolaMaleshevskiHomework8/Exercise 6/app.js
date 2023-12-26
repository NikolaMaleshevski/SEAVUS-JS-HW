/**One student has 5 exams in the first semester. 
 * His/Her grades for all of the exams are 10, 6, 8, 9, 6 respectively. 
 * The professor told the students that for passing the first semester they must have average of 8.
 *  The student needs to know whether they have passed the semester or not. 
 * Alert on screen if the student pass or not! */


let grades = [10, 6, 8, 9, 6];


function average(arrayOfGrades){
    let sumOfGrades = 0;

    for(let i = 0; i<grades.length; i++){
        if(!isNaN(arrayOfGrades[i])){
            sumOfGrades = sumOfGrades + arrayOfGrades[i];
        }
    }

    let average = sumOfGrades / arrayOfGrades.length;
    let message = ``;

    if(average>=8){
        message = `You have passed with an average of: ${average}` 
    } else {
        message = `You have failed, your average is ${average}`
    }

    return message
}

let field = document.getElementById("field");
field.innerText = average(grades);
