// A. Define a function called higherOrderFunction that takes two parameters: num and callback. 
// Inside higherOrderFunction, call the callback function and pass num as an argument.

function higherOrderFunction (num, callback){

    return callback(num)
}

// B. Define a function called callbackFunction that takes a number as an argument and logs it to the console. 
// Call higherOrderFunction with a number and pass callbackFunction as the callback.

function callBackFunction (number) {
    console.log(number)

}

higherOrderFunction(6, callBackFunction)


// C. Modify the call to higherOrderFunction, to pass a number and the same callback but as a function expression.

higherOrderFunction( 7, function(number){
    console.log(number)
})


// D. In the call to higherOrderFunction, modify the callback function expression. 
// The new function expression should log the square of the number to the console.

higherOrderFunction( 10, function(number){
    console.log(number*number)
})


// E. In the call to higherOrderFunction, modify the callback function expression that takes two parameters, num1 and num2, and 
// log their sum to the console. Make the necessary changes to higherOrderFunction to call the callback accordingly.

function higherOrderFun (num1, num2, callback){

    return callback(num1, num2)
}

higherOrderFun(5,6, function(num1, num2,){
    console.log(num1+num2)
})