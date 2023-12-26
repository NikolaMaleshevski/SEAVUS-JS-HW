console.log("CONNECTED");

let input1 = prompt("Input your first number:");
let input2 = prompt("Input your second number:");

let number1 = parseFloat(input1);
let number2 = parseFloat(input2);

function exercise(num1, num2) {

    if(isNaN(num1) || isNaN(num2)){
        console.log("Please enter valid numbers!")
        return
    }
    if (num1 < 0 || num2 < 0) {
        console.log('Please enter positive numbers!');
        return;
    }
  
    let difference1 = Math.abs(100 - num1);
    let difference2 = Math.abs(100 - num2);
  
    if (difference1 < difference2) {
      console.log(`${num1} is closer to 100.`);
    } else if (difference2 < difference1) {
      console.log(`${num2} is closer to 100.`);
    } else {
      console.log(`Both numbers are equally close to 100.`);
    }
  }

exercise(number1, number2);

//math.abs go vidov od chatGPT i go izgooglav 