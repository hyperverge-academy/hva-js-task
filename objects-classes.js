// 1. BASIC OBJECTS

// a. Define a variable named student and assign it an empty object.

let student = {}

// b. Add properties to the student object for name, email, and age. Set their values to your own name, email, and age.

student.name = "khushbu"
student.email = "kk@gmail.com"
student.age = 21

// c. Log the name property of the student object to the console.

console.log(student.name)


// d. Update the age property of the student object to some random value, say 10. Log the age property of the student object to the 
// console to see the updated property.

student.age = 10
console.log(student.age)


// e. Add a method called greet to the student object that logs a greeting message using the name property. 
// Call the greet method to see the greeting message.

student.greet = function (){
    console.log(`Hello, My self ${this.name}`)
}

student.greet()



// 2. NESTED OBJECTS

//a. Create a new object inside the student object called address. Add properties to the address object for country, city, and pin_code. 
// Set their values to your address details.

student.address = {
    country : "India",
    city : "Delhi",
    pin_code : "11008"
}


// b. Log the country property of the address object to the console.

console.log(student.address.country)


// c. Update the pin_code property of the address object to a new pin code. Log the address object to the console to see the updated pin_code property.

student.address.pin_code = "110044"

console.log(student.address)



// 3. CLASS

// a. Create a new object named friend with similar properties to the student object, but with values representing a friend's name, 
// email, age, and address. Log the friend object to the console.

let friend = {
    name: "Pooja",
    email: "pooja@gmail.com",
    age: 21,
    greet: function(){
        console.log(`Hello, My self ${this.name}`)
    },
    address: {
        country : "India",
        city : "Delhi",
        pin_code : "11008"
    }
}

console.log(friend)


// b. Create a new object named topper with similar properties to the student object, but with values representing a topper’s name, 
// email, age, and address. Log the friend object to the console.

let topper = {
    name: "abc",
    email: "abc@gmail.com",
    age: 21,
    greet: function(){
        console.log(`Hello, My self ${this.name}`)
    },
    address: {
        country : "India",
        city : "Delhi",
        pin_code : "11005"
    }
}

console.log(topper)


// c. Define a class called Student that takes parameters for name, email, age, country, city, and pin_code.
// Inside the class, set these parameters as properties of the new object. Make sure to add the greet method inside the class,

class Student{
    constructor(name, email, age, country, city, pin_code){
        this.name = name
        this.email = email
        this.age = age
        this.address = {
            country: country,
            city: city,
            pin_code: pin_code
        }
    }

    greet(){
        console.log(`Hello, My self ${this.name}`)
    }

}


// d. Add a method called getFullAddress to the Student class that returns the full address of the student in this format
// (India, Bangalore - 560038).

Student.prototype.getFullAddress = function (){
    return  `${this.address.country}, ${this.address.city} - ${this.address.pin_code} `
}


// e. Create objects of the Student class for yourself, your friend, and another student. Log these objects to the console to see the
// created objects. 

const myself = new Student("khushbu", "kk@123", 21, "India", "Delhi", "110044");
const friendStudent = new Student("poja", "pooja@123", 21, "India", "Delhi", "110044");
const another = new Student("abc", "abc@123", 22, "India", "Delhi", "110044");


// f. Call the getFullAddress method on one of the Student objects and log the result to the console.

console.log(myself.getFullAddress())
 


// 4. Employee Data:

// a. Define the Employee Class. The class should take parameters for name, email, age, department, position, and salary. 
// Inside the constructor method, set these parameters as properties of the employee object.

class Employee {
    constructor(name, email, age, department, position, salary){
        this.name = name
        this.email = email
        this.age = age
        this.department = department
        this.position = position
        this.salary = salary

    }
}


// b. Add a method named introduce() inside the class that logs a greeting and the employee's name and position, e.g., "Hello everyone, I am Ayush, Senior Software Developer."

Employee.prototype.introduce = function(){
    console.log(`Hello everyone, I am ${this.name}, ${this.position}.`);
}

// c. Add a method named displaySalary() inside the class that logs the employee's salary formatted as a string, e.g., "Salary: $5000".

Employee.prototype.displaySalary = function(){
    console.log(`Salary: $${this.salary}`);
}

// d. Create an object named newEmployee with properties representing a new employee's name, email, age, department, position, and salary. Log this object to the console.

let newEmployee = new Employee("Alice", "alice@12", 28, "Engineering", "Software Engineer", 80000);


// e. Create another object named manager with properties representing a manager. Log this object to the console.
const manager = new Employee("Smith", "smith@12", 48, "Engineering", "Engineering Manager", 95000)

// f. On the newEmployee object, call the introduce() method to see a greeting and role.
newEmployee.introduce()


// g. Call the displaySalary() method on the manager object to log the salary details.

manager.displaySalary()



// 5. BOOK DATA

// a. Define the Book Class. The class should take parameters for title, author, publisher, year, and genre. Inside the constructor 
// method, set these parameters as properties of the book object.

class Book {
    constructor(title, author, publisher, year, genre){
        this.title = title
        this.author = author
        this.publisher = publisher
        this.year = year
        this.genre = genre
    }
}


// b. Add a method named describe() that logs a brief description of the book, combining the title, author, and year, e.g., "Five Point Someone - Chetan Bhagat (2004).

Book.prototype.describe = function(){
    console.log(`${this.title} - ${this.author} (${this.year})`);
}


// c. Add a method named displayGenre() that logs the genre of the book.

Book.prototype.displayGenre = function(){
    console.log(`Genre: ${this.genre}`);
}


// d. Create an object named classicBook with properties representing a classic novel’s details. Log this object to the console.

let classicBook = new Book("Five Point Someone", "Chetan Bhagat", "Rupa & Co.", 2004, "Fiction")


// e. Create an object named sciFiBook with properties representing a science fiction book. Log this object to the console.

let sciFiBook = new Book("Dune: Deluxe Edition", "Frank Herbert", "Penguin Publishing Group", 2009, "Science Fiction")


// f. On the classicBook object, call the describe() method to see a summary of the book.
classicBook.describe()

// g. Call the displayGenre() method on the sciFiBook object to log the genre.
sciFiBook.displayGenre()