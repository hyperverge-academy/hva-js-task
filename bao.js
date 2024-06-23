// BASIC ARITHMETIC OPERATIONS

// a. Add: Create a callback function addNumbers that takes two numbers and returns their sum.

function addNumbers(a, b){
    return a+b;
}


//b. Multiply: Create a callback function multiplyNumbers that takes two numbers and returns their product.

function multiplyNumbers(a, b){
    return a*b;
}


//c. Subtract: Create a callback function subtractNumbers that takes two numbers and returns the result of subtracting
// the second number from the first.

function subtractNumbers(a, b){
    return a-b;
}


//d. Divide: Create a callback function divideNumbers that takes two numbers and returns the result of dividing the first number
// by the second, ensuring to handle division by zero.

function divideNumbers(a, b){
    if(b == 0){
        return 0;
    }
    return a/b;
}



//e. Define a function performArithmetic that accepts three parameters: num1 and num2 (the numbers on which to perform the operation), 
// and operation (a callback function that specifies the arithmetic operation to be performed on num1 and num2).

function performArithmetic(num1, num2, operation){
    return operation(num1, num2);
}


//f. Call performArithmetic with different pairs of numbers and each of the callback functions to see the results of the arithmetic
// operations.

let result1 = performArithmetic(1,2, addNumbers )
let result2 = performArithmetic(3,4, multiplyNumbers)
let result3 = performArithmetic(6,4, subtractNumbers)
let result4 = performArithmetic(10,2, divideNumbers)

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)