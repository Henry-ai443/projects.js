//A javascript  program that processes an array of numbers.
/*
This program will:
1.Filter out numbers that are less than 5.
2.Multiply the remaining numbers by 2.
3.Sum all the numbers in the resulting array.
 */

function processArray(arr, filterFunc, mapFunc, reduceFunc, initialValue){
    const filteredArray = arr.filter(filterFunc);
    const mappedArray = filteredArray.maap(mapFunc);
    const result = mappedArray.reduce(reduceFunc, initialValue);

    return result;
}

function filterLessThanFive(num){
    return num >= 5;
}
function multiplyByTwo(num){
    return num * 2;
}
function sum(accumulator, num){
    return accumulator + num;
}

const numbers = [1, 2, 3, 4, 5, 6, 7,8,9,10];
const result = processArray(numbers, filterLessThanFive, multiplyByTwo, sum, 0);
console.log(result);