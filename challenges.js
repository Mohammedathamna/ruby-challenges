
// Challenge: A Fibonacci Sequence is created by adding two numbers to create the next number in the sequence.
// You then sum that number with the one preceding it to get the next number,, and so on.
// For example, if you have the sequence 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, then the next number in the sequence is 55.


function generateFibonacci(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }
    return fib; 
}

console.log(generateFibonacci(12));


// Challenge: Create a program that takes a series of numbers and examines it to find the numbers missing to make it a perfect range.
// For example, the series of numbers could be [2, 1, 5, 4, 6, 9, 7, 8, 10].
// This array is missing the number 3. The goal of this problem is to write code that finds which numbers are missing, and print them out.


function findMissingNumbers(arr) {
    
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    let missingNumbers = [];

    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers; 
}


const series = [2, 1, 5, 4, 6, 9, 7, 8, 10];
const series1 = [2, 1, 5, 4, 13, 10, 9, 7, 8, 15];

console.log(findMissingNumbers(series));
console.log(findMissingNumbers(series1));




// bonus point 
// - Write a simple input validation code. 


function validatePositiveInteger(input) {
    
    const regex = /^[1-9]\d*$/;
    return regex.test(input);
}


function getPositiveInteger() {
    let input;
    let isValid = false;
    while (!isValid) {
        input = prompt("Enter a positive integer:");
    
        isValid = validatePositiveInteger(input);
    
        if (!isValid) {
        alert("Invalid input! Please enter a positive integer.");
            }
    }

    return Number(input);
}

const userInput = getPositiveInteger();
console.log("Valid input received:", userInput);


