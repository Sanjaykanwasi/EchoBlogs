---
title: React.js Tutorial
slug: react-js-tutorial
description: A beginner-friendly guide to learning and building applications with React.js, covering components, props, state, events, and hooks.
author: Sanjay
image: /blog1.jpg
date: 2023-02-19T15:00:00.000Z
---

# Introduction

React.js is a JavaScript library developed by Facebook for building interactive user interfaces. It allows developers to build web applications that can update and render efficiently in response to data changes.

---

## Prerequisites

Before starting with React, you should have a good understanding of:

- HTML, CSS, and JavaScript (ES6+)
- Basic DOM manipulation
- JavaScript functions and objects

---

## 1. Setting Up a React Project

Use **Create React App** to set up a new React project:

```bash
npx create-react-app my-react-app
cd my-react-app
npm start
```

2. Variables and Data Types
   Declare variables using let, const, or var:

js
Copy
Edit
let name = "Sanjay";
const age = 25;
var isStudent = true;
Data types include:

String

Number

Boolean

Null

Undefined

Object

Array

3. Functions
   Functions group reusable code:

js
Copy
Edit
function greet(user) {
return `Hello, ${user}!`;
}

console.log(greet("Sanjay"));
Arrow function syntax:

js
Copy
Edit
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7 4. Conditionals
Control the flow using if, else if, else, or switch:

js
Copy
Edit
let score = 85;

if (score >= 90) {
console.log("Grade: A");
} else if (score >= 75) {
console.log("Grade: B");
} else {
console.log("Grade: C");
} 5. Loops
Repeat code using for, while, or for...of:

js
Copy
Edit
for (let i = 0; i < 5; i++) {
console.log(i);
}
js
Copy
Edit
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
console.log(fruit);
} 6. Arrays and Objects
Arrays store collections:

js
Copy
Edit
let colors = ["red", "green", "blue"];
console.log(colors[0]); // "red"
Objects store key-value pairs:

js
Copy
Edit
const user = {
name: "Sanjay",
age: 25,
isAdmin: true,
};

console.log(user.name); // "Sanjay" 7. DOM Manipulation
Interact with HTML elements using the DOM:

html
Copy
Edit
<button onclick="changeText()">Click Me</button>

<p id="demo">Original Text</p>

<script>
  function changeText() {
    document.getElementById("demo").innerText = "Text Changed!";
  }
</script>

8. Events
   Handle user actions with event listeners:

js
Copy
Edit
document.querySelector("button").addEventListener("click", () => {
alert("Button clicked!");
}); 9. ES6+ Features
Modern JavaScript (ES6+) includes:

Template literals:

js
Copy
Edit
let name = "Sanjay";
console.log(`Hello, ${name}`);
Destructuring:

js
Copy
Edit
const person = { name: "Sanjay", age: 25 };
const { name, age } = person;
Spread/rest operators:

js
Copy
Edit
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
Promises & async/await:

js
Copy
Edit
const getData = async () => {
const res = await fetch("https://api.example.com/data");
const data = await res.json();
console.log(data);
}; 10. Debugging and Console
Use console.log() to debug:

js
Copy
Edit
let x = 10;
console.log("Value of x:", x);
Other methods:

console.error()

console.warn()

console.table()

Conclusion
JavaScript is the foundation of interactive web development. Mastering it opens the door to frameworks like React, Vue, and Node.js for backend development.

Resources
MDN JavaScript Guide

JavaScript.info

Eloquent JavaScript (free book)
