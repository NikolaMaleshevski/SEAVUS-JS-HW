console.log("Hello Friend");



let userChoice = prompt("Type F to input Fahrenheit, Type C to input celsius:");



if (userChoice === "C" || userChoice === "c") {
    let celsiusInput = prompt("Input celsius:");

    function CelsiusToFahrenheit(celsius) {
        resultFahrenheit = celsius * 1.8 + 32;
        console.log(`Celsius: ${celsiusInput}`);
        console.log(`Fahrenheit: ${resultFahrenheit}`);
        return;
    };

    if (isNaN(parseFloat(celsiusInput))) {
        console.log("PLEASE ENTER A NUMBER")
    } else {
        CelsiusToFahrenheit(parseFloat(celsiusInput));
    }

}


else if (userChoice === "F" || userChoice === "f") {
    let fahrenheitInput = prompt("Input fahrenheit:")

    function FahrenheitToCelsius(fahrenheit) {
        resultCelsius = (fahrenheit - 32) * (5 / 9);
        console.log(`Fahrenheit: ${fahrenheitInput}`);
        console.log(`Celsius: ${resultCelsius}`);
        return;
    }

    if (isNaN(parseFloat(fahrenheitInput))) {
        console.log("PLEASE ENTER A NUMBER");
    } else {
        FahrenheitToCelsius(parseFloat(fahrenheitInput));
    }
}



else {
    console.log("INVALID INPUT");
};



