function claculateSquareRoot(number){
    if(isNaN(number)){
        throw new Error("Input must be a valid number.")
    }

    if(number < 0){
        throw new Error("Number must be non-negative.")
    }
    
    return Math.sqrt(number);
}

function getInputAndCalculate(){
    const userInput = prompt("Enter a number to calculate its square root: ");

    try{
        const number = parseFloat(userInput);
        const result = claculateSquareRoot(number)

        console.log(`The square root of ${number} is ${result}`);
    }catch(error){
        console.error("Error:", error.message);
    }
}

getInputAndCalculate();