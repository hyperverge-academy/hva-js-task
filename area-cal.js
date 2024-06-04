// A. Define a function called calculateArea that takes two parameters, width and height, and returns the area of a rectangle 
// (width * height).

function calculateArea (width, height) {
    const area = width*height;
    return area;
}


// B. Call the calculateArea function with width = 5 and height = 10, and log the result to the console.

console.log(calculateArea(5,10))


// C. Modify the calculateArea function to have a default value of 1 for both width and height. 
// This means that if no arguments are provided, the function should return 1.

function calculateArea (width=1, height=1) {
    const area = width*height;
    return area;
}
console.log(calculateArea());


// D. Rewrite the calculateArea function as a function expression and store it in a variable called calculateAreaFunction.

const calculateAreaFunction = function (width, height){
    const area = width*height;
    return area;
}


// E. Rewrite the calculateArea function as an arrow function.

calculateArea = (width, height) => width*height

console.log(calculateArea(6,10));