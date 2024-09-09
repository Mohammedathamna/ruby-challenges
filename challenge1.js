
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
