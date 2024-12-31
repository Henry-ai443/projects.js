function DegreesToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

function fahrenheitToDegrees(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

function DegreesToKelvin(celsius){
    return celsius + 273.15;
}

function kelvinToDegrees(kelvin){
    return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit){
    const celsius = fahrenheitToDegrees(fahrenheit);
    return DegreesToKelvin(celsius);
}

function kelvinToFahrenheit(kelvin){
    const celsius = kelvinToDegrees(kelvin);
    return DegreesToFahrenheit(celsius);
}

let temperature = parseFloat(prompt("Enter temperature: "))
let inputUnit = prompt("Enter input unit(celsius, fahrenheit, Kelvin): ").toLowerCase();

let celsius = 0;
let fahrenheit = 0;
let kelvin = 0;

switch(inputUnit){
    case "celsius":
        celsius = temperature;
        fahrenheit = DegreesToFahrenheit(celsius);
        kelvin = DegreesToKelvin(celsius);
        break;
    case "fahrenheit":
        fahrenheit = temperature;
        celsius = fahrenheitToDegrees(fahrenheit);
        kelvin = fahrenheitToKelvin(fahrenheit);
        break;
    case "kelvin":
        kelvin = temperature;
        celsius = kelvinToDegrees(kelvin);
        fahrenheit = kelvinToFahrenheit(kelvin);
        break;
    default:
        console.log("Invalid input unit");
        return;
}

console.log(`${temperature}${inputUnit} is equal to:`);
console.log(`${celsius.toFixed(2)} C`);
console.log(`${fahrenheit.toFixed(2)} F`);
console.log(`${kelvin.toFixed(2)} K`);