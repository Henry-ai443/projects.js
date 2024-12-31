function calculate(operator, num1, num2){
    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 === 0){
                return "Error: Division by Zero";
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

const num1 = parseFloat(prompt("Enter the first number: "));
const operator = prompt("Enter the operator(+, - , * , /): ");
const num2 = parseFloat(prompt("Enter the second number: "))

const result = calculate(operator , num1, num2);

if(typeof result === 'number'){
    alert("Result: " + result);
}else{
    alert(result);
}