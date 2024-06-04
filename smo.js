// SIMPLE MATHEMATICAL OPERATIONS

// A. Create a callback function doubleNumber that takes a number and returns its double.  

function doubleNumber(num){
    return num*2
}


// B. Create another callback function squareNumber that takes a number and returns its square.

function squareNumber(num){
    return num*num
}


// C. Create another callback function incrementNumber that takes a number and returns the number incremented by one.

function incrementNumber(num){
    return num+1
}


// D. Define a function performOperation that accepts two parameters: num (a number on which to perform the operation), 
// and operation (a callback function that specifies the operation to be performed on num). Inside performOperation, 
// call the operation function and pass num as an argument. The function should return the result.

function performOperation(num, operation){
    return operation(num)

}


// E. Call performOperation with a number and each of the callback functions in turn to see the results of the operations. 
// Log the result to the console for each call to performOperation.

let result1 = performOperation(3, doubleNumber)
let result2 = performOperation(4, squareNumber)
let result3 = performOperation(5, incrementNumber)

console.log(result1)
console.log(result2)
console.log(result3)


// E. Observe the higher-order function, performOperation, to understand why higher-order functions are used.