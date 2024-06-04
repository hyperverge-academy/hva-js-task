// Functions, Objects and Arrays

// 1. Calculate Age:

// a. Define an array called people containing several objects, each representing a person. Each object should have properties
// such as name, and age.

const people = [{ name: "a", age: 20 }, { name: "b", age: 21 }, { name: "c", age: 22 }];


// b. Define a function called calculateAverageAge() that takes the people array as input and returns the average age of all
// the people in the array.

function calculateAverageAge(people) {
    let sum = 0;
    for (let i = 0; i < people.length; i++) {
        sum += people[i].age;
    }
    return sum / people.length;
}


// c. Call the calculateAverageAge() function with the people array as an argument and log the result to the console. 
console.log(calculateAverageAge(people));



// 2. Shopping Cart:

// a. Define an array called cart containing several objects, each representing an item in the shopping cart.
// Each object should have properties such as name, price, and quantity.
const cart = [
    {
        name: "a",
        price: 20,
        quantity: 2
    },
    {
        name: "b",
        price: 20,
        quantity: 4
    },
    {
        name: "c",
        price: 20,
        quantity: 6
    }
]


// b. Define a function called calculateTotalPrice() that takes the shopping cart array as input and returns the total price of
// all items in the shopping cart.
function calculateTotalPrice(cart) {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].quantity;
    }
    return sum;
}


// c. Call the calculateTotalPrice() function with the cart array as an argument and log the result to the console.

console.log(calculateTotalPrice(cart));



// 3. Inventory Management System:

// a. Define an array called inventory containing several objects, each representing a product in the store's inventory. 
// Each object should have properties such as id, name, price, quantity, and any other relevant details.
const inventory = [
    {
        id: 1,
        name: "a",
        price: 20,
        quantity: 2
    },
    {
        id: 2,
        name: "b",
        price: 20,
        quantity: 4
    },
    {
        id: 3,
        name: "c",
        price: 20,
        quantity: 6
    }
]


// b. Create a class called Product to represent a product, and use this class to create objects for each product in the inventory array.
class Product {
    constructor(id, name, price, quantity) {
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
    }
}

const inventoryArr = [
    new Product(1, "apple", 40, 10),
    new Product(2, "mango", 30, 10),
    new Product(3, "pineapple", 35, 10),
]


// c. Define functions addProduct() to add a new product to the inventory, updateProduct() to update the quantity of an existing product,
// removeProduct() to remove a product from the inventory, and displayProducts() to display all the products in the current inventory
// in the following format: ProductName - Price (Quantity). Try to think of the function arguments on your own.

function addProduct(id, name, price, quantity) {
    inventoryArr.push(new Product(id, name, price, quantity))

}

function updateProduct(id, quantity) {
    for (let product of inventoryArr) {
        if (product.id == id) {
            product.quantity = quantity;
        }
    }

}


function removeProduct(id) {
    for (let i = 0; i < inventoryArr.length; i++) {
        if (inventoryArr[i].id == id) {
            inventoryArr.splice(i, 1);
        }
    }


}

function displayProducts() {
    inventoryArr.forEach(product => {
        console.log(`${product.name} - ${product.price} ( ${product.quantity} )`)
    })

}

// Add a new product
addProduct(4, "watermelon", 90, 10);

// Update the quantity of an existing product
updateProduct(2, 15);

// Remove a product from the inventory
removeProduct(1);

// Display all products in the inventory
displayProducts();



// 4. Expense Tracker:

// a. Define an array called expenses containing several objects, each representing an expense. Each expense object should have
// properties such as id, name, amount, date, and any other relevant details.

const expense = [
    {
        id: 1,
        name: "a",
        amount: 2000,
        date: "2024-05-21"
    },
    {
        id: 2,
        name: "b",
        amount: 3000,
        date: "2024-05-22"
    },
    {
        id: 3,
        name: "c",
        amount: 4000,
        date: "2024-05-23"
    }
]


// b. Create a class called Expense to represent an expense, and use this class to create objects for each expense in the expenses array.

class Expense {
    constructor(id, name, amount, date) {
        this.id = id
        this.name = name
        this.amount = amount
        this.date = date
    }
}

const expenses = [
    new Expense(1, "Rent", 1500, "2024-05-21"),
    new Expense(2, "Utilities", 400, "2024-05-22"),
    new Expense(3, "Internet", 100, "2024-05-25")
];



// c. Define functions addExpense() to add a new expense, updateExpense() to update an existing expense, removeExpense() to remove
// an expense, and displayExpenses() to display all expenses in the following format: ExpenseName - Amount (Date).

function addExpense(id, name, amount, date) {
    expenses.push(new Expense(id, name, amount, date))

}


function updateExpense(name, newAmount, newDate) {
    for (let expense of expenses) {
        if (expense.name == name) {
            expenses.amount = newAmount
            expenses.date = newDate
            return;
        }
    }
    console.log(`Expense with name ${name} not found.`)

}

function removeExpense(id) {
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].id == id) {
            expenses.splice(i, 1);
            return;
        }
    }
    console.log(`Expense with Id ${id} not found.`)
}


function displayExpenses() {
    expenses.forEach(expense => {
        console.log(`${expense.name} - ${expense.amount} (${expense.date})`);
    });

}

// Add a new expense
addExpense(4, "Groceries", 200, "2024-05-30");

// Update an existing expense
updateExpense("Rent", 1250, "2024-05-30");

// Remove an expense
removeExpense(3);

// Display all expenses
displayExpenses();



// 5. Bookstore Management System:

// a. Define an array called inventory containing several objects, each representing a book in the bookstore's inventory.
// Each book object should have properties such as id, title, author, price, quantity, and any other relevant details.
const inventoryArray = [
    {
        id: 1,
        title: "a",
        author: "abc",
        price: 200,
        quantity: 2
    },
    {
        id: 2,
        title: "b",
        author: "abc",
        price: 200,
        quantity: 2
    },

]


// b. Create a class called Book to represent a book, and use this class to create objects for each book in the inventory array.
class Book {
    constructor(id, title, author, price, quantity) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
}

inventoryArray.push(new Book(3, "Harry Potter", "J k rowling", 300, 10))
inventoryArray.push(new Book(4, "A Fine Balance", "Rohinton Mistry", 200, 10))
inventoryArray.push(new Book(5, "The God of Small Things", "Arundhati Roy", 300, 10))


// c. Define functions addBook() to add a new book to the inventory, updateBook() to update the quantity of an existing book,
// removeBook() to remove a book from the inventory, and displayBooks() to display all books in the current inventory in the following format: BookTitle - Price (Quantity).

function addBook(id, title, author, price, quantity) {
    inventoryArray.push(new Book(id, title, author, price, quantity))

}

function updateBook(id, quantity) {
    for (let book of inventoryArray) {
        if (book.id == id) {
            book.quantity = quantity;
            return
        }
    }
    console.log(`Book with id ${id} not found.`)

}

function removeBook(id) {
    for (let i = 0; i < inventoryArray.length; i++) {
        if (inventoryArray[i].id == id) {
            inventoryArray.splice(i, 1);
            return;
        }
    }
    console.log(`Book with id ${id} not found.`)

}

function displayBooks() {
    inventoryArray.forEach(book => {
        console.log(`${book.title} - ${book.price} ( ${book.quantity} )`)
    })
}

// Add a new book
addBook(6, "xyz", "aaa", 150, 5);

// Update an existing book
updateBook(6, 8);

// Remove an expense
removeBook(1);

// Display all expenses
displayBooks();



// 6. Todo List Application:

// a. Define an array called tasks containing several objects, each representing a task in the to-do list.
// Each task object should have properties such as id, description, dueDate, status, and any other relevant details.

const tasks = [
    {
        id: 1,
        description: "a",
        dueDate: "2024-05-21",
        status: "pending"
    },

    {
        id: 2,
        description: "b",
        dueDate: "2024-05-21",
        status: "pending"
    },
]


// b. Create a class called Task to represent a task, and use this class to create objects for each task in the tasks array.
class Task {
    constructor(id, description, dueDate, status) {
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;

    }
}

tasks.push(new Task(3, "Finish js project", "2024-06-05", "pending"))
tasks.push(new Task(4, "Novel Reading", "2024-06-05", "pending"))

// c. Define functions addTask() to add a new task, updateTask() to update an existing task, removeTask() to remove a task,
// and displayTasks() to display all tasks in the following format: TaskDescription - DueDate (Status).

function addTask(id, description, dueDate, status) {
    tasks.push(new Task(id, description, dueDate, status))
}


function updateTask(id, description, dueDate, status) {
    for (let task of tasks) {
        if (task.id == id) {
            task.description = description
            task.dueDate = dueDate
            task.status = status
            return
        }
    }

    console.log(`Task with id ${id} is not found.`)

}

function removeTask(id) {
    const index = tasks.findIndex(task => task.id == id)
    if (index !== -1) {
        tasks.splice(index, 1)
    }
    else {
        console.log(`Task with Id ${id} is not found.`)
    }
}

function displayTasks() {
    tasks.forEach(task => {
        console.log(`${task.description} - ${task.dueDate}(${task.status})`)
    })
}


// Add a new task
addTask(5, "Do yoga", "Workout for 1 hour", "2024-05-31", "completed");

// Update an existing task
updateTask(2, "coding task", "Complete the coding questions", "2024-06-05", "completed");

// Remove a task
removeTask(1);

// Display all tasks
displayTasks();



// 7. Manipulating Product Data:

// a. Define a variable named products and assign it an array containing several objects. Each object should represent a
// product and have properties like id, name, price, and category. 
const products = [
    {
        id: 1,
        name: "Banana",
        price: 9,
        category: "Food"
    },
    {
        id: 2,
        name: "Apple",
        price: 35,
        category: "Food"
    },
    {
        id: 3,
        name: "Mango",
        price: 35,
        category: "Food"
    },

]


// b. Use the forEach method to iterate over the products array and log each product's name and price to the console.
products.forEach(item => {
    console.log(` ${item.name} - $${item.price}`)
})


// c. Assume a tax rate of 10%. Use the map method to create a new array called productsWithTax that includes each product's name
// and a new price which is the original price plus the tax. Log the productsWithTax array to the console.

const productsWithTax = products.map(item => {
    return {
        name: item.name,
        price: item.price + 0.1 * item.price
    }
})

console.log(productsWithTax)


// d. Use the filter method to create a new array called foodProducts that contains only the products from the category "Food".
// Log the foodProducts array to the console.

const foodProducts = products.filter(item => item.category == "Food")
console.log(foodProducts)


// e. Use filter to find products with a price under $10, then map to return a string for each that includes the name and price
// (e.g., "Banana - $1.99"). Store these strings in an array called affordableProducts and log it to the console.

const affordableProducts = products.filter(item => item.price < 10).map(item => `${item.name} - $${item.price}`)
console.log(affordableProducts)


// f. Initialize a variable totalPrice to 0. Use forEach to sum up the prices of all products and update totalPrice.
// Log totalPrice after the loop.
let totalPrice = 0;
products.forEach(item => {
    totalPrice += item.price
})
console.log(totalPrice)