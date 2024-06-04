// BASIC ARRAY

// a. Define a variable named colors and assign it an array containing strings representing different colors (e.g., "red", "green", "blue").

const colors = ["red", "green", "blue"]

// b. Log the first element of the colors array to the console.
console.log(colors[0])

// c. Change the second element of the colors array to "yellow". 
// Log the second element of the colors array to the console to verify the change.

colors[1] = "yellow"
console.log(colors[1])


// d. Add a new color to the end of the colors array. Log the last element of the colors array to the console.
colors.push("sky blue")
console.log(colors[colors.length-1])



// 3. LOOPS FOR ARRAYS

// a. Use a for loop to iterate over the colors array and log each color to the console.
for (let i=0; i<colors.length; i++){
    console.log(colors[i])
}


// b. Use a while loop to iterate over the colors array and log each color to the console.
i=0
while(i<colors.length){
    console.log(colors[i])
    i++
}


// c. Use a for...of loop to iterate over the colors array and log each color to the console.
for(const color of colors){
    console.log(color)
}



// 3. ARRAYS AS AN OBJECT

// a. Use the typeof operator to check the type of colors array and console it.
console.log(typeof colors)


// b. Log the length property of the colors array to the console to see the number of elements in the array.
console.log(colors.length)


// c. Use the push method to add another color to the end of the colors array.
colors.push("black")


// d. Use the pop method to remove the last color from the colors array.
colors.pop()


// e. Use the indexOf method to find the index of a specific color (e.g., "blue") in the colors array.
console.log(colors.indexOf("blue"))


// f. Add a property to the colors array called owner and set its value to your name. Log the colors array 
// to see if the owner property is added.
colors.owner = "Khushbu"
console.log(colors)


// g. Use a for...in loop to iterate over the properties of the colors array and log each property name and
// the associated value to the console.

for(const property in colors){
    console.log(`${property}: ${colors[property]}`)

}



// 4. Foreach, Map, Filter

// a. Define a variable named numbers and assign it an array containing some numbers (e.g., 1, 2, 3, 4, 5).
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// b. Use the forEach method to iterate over the numbers array and log each number to the console.
numbers.forEach(num => {
    console.log(num)
})


// c. Use the forEach method to iterate over the numbers array and log each number multiplied by 2 to the console.
numbers.forEach(num => {
    console.log(num*2)
})


// d. Use the map method to create a new array called squaredNumbers that contains the square of each number in the numbers array.
// Log the squaredNumbers array to the console.
const squaredNumbers = numbers.map(function(num){
    return num**2
})
console.log(squaredNumbers)


// e. Rewrite the callback function passed to the map function as an arrow function.
const squareNumbers = numbers.map(num => num**2)
console.log(squareNumbers)

// f. Use the filter method to create a new array called evenNumbers that contains only the even numbers from the numbers array.
// Log the evenNumbers array to the console.
const evenNumbers = numbers.filter( function(num){
    return num%2 == 0
})
console.log(evenNumbers)

// g. Rewrite the callback function passed to the filter function as an arrow function
const evenNums = numbers.filter( num => num%2 == 0)
console.log(evenNums)



// 5. Manipulating Temperatures

// a. Define a variable named temperatures and assign it an array containing several temperature readings in Celsius (e.g., -3, 14, 22, 5, -10).
const temperatures = [-3, 14, 22, 5, -10]


// b. Use the forEach method to iterate over the temperatures array and log each temperature to the console. Rewrite the callback
// function passed to the foreach function as an arrow function.
temperatures.forEach(function(temp){
    console.log(temp)
})

temperatures.forEach(temp =>{ 
    console.log(temp)
})


// c. Use the forEach method to iterate over the temperatures array and convert each temperature to Fahrenheit using the formula
// (temperature * 9/5) + 32. Log each converted temperature to the console. Rewrite the callback function passed to the foreach 
// function as an arrow function.
temperatures.forEach(function(temp){
    const fahrenheit = (temp*9/5)+32
    console.log(fahrenheit)
})

temperatures.forEach(temp =>{ 
    const fahrenheit = (temp*9/5)+32
    console.log(fahrenheit)
})


// d. Use the map method to create a new array called temperaturesInFahrenheit that contains the Fahrenheit equivalent of each
// temperature in the temperatures array. Log the temperaturesInFahrenheit array to the console. Rewrite the callback function
// passed to the map function as an arrow function.
const temperaturesInFahrenheit = temperatures.map(function(temp){
    const fahrenheit = (temp*9/5)+32
    return fahrenheit
})
console.log(temperaturesInFahrenheit)

const temperatureInFahrenheit = temperatures.map(temp => (temp*9/5)+32 )
console.log(temperatureInFahrenheit)


// e. Use the filter method to create a new array called belowFreezing that contains only the temperatures from the temperatures
// array that are below 0°C. Log the belowFreezing array to the console. Rewrite the callback function passed to the filter function
// as an arrow function.

function isBelowFreezing(temperature) {
    return temperature < 0;
}

const belowFreezing = temperatures.filter(isBelowFreezing)
console.log(belowFreezing)

const belowFreezings = temperatures.filter(temp => temp<0)
console.log(belowFreezings)




// 6. Operations on Fruits:

// a. Define a variable named fruits and assign it an array containing the names of several fruits
// (e.g., "apple", "banana", "cherry", "date").
const fruits = ["apple", "banana", "cherry", "date"]


// b. Use the forEach method to iterate over the fruits array and log each fruit name capitalized to the console
// (e.g., "Apple", "Banana", "Cherry", "Date"). Rewrite the callback function passed to the foreach function as an arrow function.
fruits.forEach(function(fruit){
    const capitalized = fruit.charAt(0).toUpperCase() + fruit.slice(1)
    console.log(capitalized)
})

fruits.forEach(fruit =>{
    const capitalized = fruit.charAt(0).toUpperCase() + fruit.slice(1)
    console.log(capitalized)
})


// c. Use the map method to create a new array called reversedFruits that contains each fruit name reversed (e.g., "elppa").
// Log the reversedFruits array to the console. Rewrite the callback function passed to the map function as an arrow function.

const reversedFruits = fruits.map(function(fruit){
    const reversed = fruit.split("").reverse().join("")
    return reversed
})
console.log(reversedFruits)

const reversedFruit = fruits.map(fruit => {
    return fruit.split("").reverse().join("")
})
console.log(reversedFruit)


// d. Use the filter method to create a new array called longFruits that contains only the fruit names that have more than 5 characters.
// Log the longFruits array to the console. Rewrite the callback function passed to the filter function as an arrow function.

const longFruits = fruits.filter(function(fruit){
    return fruit.length > 5
})
console.log(longFruits)

const longFruit = fruits.filter(fruit =>  fruit.length > 5 )
console.log(longFruit)


// e. Use filter to find fruits that contain the letter 'a', and then map to return these fruits in uppercase.
// Store the result in an array called aFruitsUpper and log it to the console.

const aFruits = fruits.filter(fruit => fruit.includes("a"))
const aFruitsUpper = aFruits.map( fruit => fruit.toUpperCase())
console.log(aFruitsUpper)


// f. Initialize a variable totalCharacters to 0. Use forEach to add up the number of characters in each fruit name and
// update totalCharacters. Log totalCharacters after the loop.

let totalCharacters = 0
fruits.forEach(function(fruit){
    totalCharacters += fruit.length
})
console.log(totalCharacters)



// 7. Custom Functions:

// a. ForEach: Write a function called forEachArray that takes an array and a callback function as arguments. 
// The forEachArray function should apply the callback function to each element of the array but does not return anything. 
// Note: You cannot use the inbuilt forEach function.

function forEachArray(array, callback){
    for(let i=0; i<array.length; i++){
        callback(array[i], i, array)
    }
}


// b. Map: Write a function called mapArray that takes an array and a callback function as arguments. 
// The mapArray function should apply the callback function to each element of the array and return a new array containing
// the transformed elements. Note: You cannot use the inbuilt map function.

function mapArray(array, callback) {
    const newArray = []
    for(let i=0; i<array.length; i++){
        newArray.push(callback(array[i], i, array))
    }
    return newArray

}


// c. Filter: Write a function called filterArray that takes an array and a callback function as arguments.
// The filterArray function should apply the callback function to each element of the array and return a new array containing
// only the elements for which the callback function returns true. Note: You cannot use the inbuilt filter function.

function filterArray(array, callback) {
    const newArray = []
    for(let i=0; i<array.length; i++){
        if(callback(array[i], i, array)){
            newArray.push(array[i])
        }
    }
    return newArray
}
