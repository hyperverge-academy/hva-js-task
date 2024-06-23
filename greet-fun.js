// A. Define a function called greet that takes a name as an argument and returns a greeting message. 
// For example, if the name is "Alice", the function should return "Hello, Alice!".

function greet(name){
    const message = `Hello, ${name}!`
    return message;
}



// B. Call the greet function you defined in the previous task with your name as the argument and log the result to the console.

console.log(greet("Khushbu"));


// C. Modify the greet function to have a default argument of "Guest" for the name parameter. 
// This means that if no name is provided, the function should return "Hello, Guest!".

function greet(name="Guest"){
    const message = `Hello, ${name}!`
    return message;
}

console.log(greet());


// D. Rewrite the greet function as a function expression and store it in a variable called greetFunction

const greetFunction = function(name="Guest"){
    const message = `Hello, ${name}!`
    return message;
}

console.log(greetFunction("Khushbu"));


//E. Rewrite the greet function as an arrow function.

const greetFunctions = (name) => "Hello" + name + "!" ;

console.log(greetFunction("Alice"));
