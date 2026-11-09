export const codeQuestions = [
  {
    question: "What keyword is used to print a message in the console?",
    code: `_____('Hello World');`,
    answer: "console.log",
  },
  {
    question:
      "What keyword is used to declare a block-scoped variable that can be reassigned?",
    code: `_____ name = "John";`,
    answer: "let",
  },
  {
    question:
      "What keyword is used to declare a value that cannot be reassigned?",
    code: `_____ age = 25;`,
    answer: "const",
  },
  {
    question: "What operator is used to add two numbers?",
    code: `let result = 10 _____ 5;`,
    answer: "+",
  },
  {
    question: "What method is used to convert a string into uppercase letters?",
    code: `let name = "john";
name._____();`,
    answer: "toUpperCase",
  },
  {
    question: "What method is used to get the length of a string?",
    code: `let word = "JavaScript";
console.log(word._____);`,
    answer: "length",
  },
  {
    question: "What keyword is used to define a conditional statement?",
    code: `_____ (age >= 18) {
  console.log("Adult");
}`,
    answer: "if",
  },
  {
    question: "What keyword is used when the previous condition is false?",
    code: `if (age >= 18) {
  console.log("Adult");
} _____ {
  console.log("Minor");
}`,
    answer: "else",
  },
  {
    question: "What keyword is used to define a reusable block of code?",
    code: `_____ greet() {
  console.log("Hello!");
}`,
    answer: "function",
  },
  {
    question: "What keyword is used to return a value from a function?",
    code: `function add(a, b) {
  _____ a + b;
}`,
    answer: "return",
  },
  {
    question: "What method adds a new element to the end of an array?",
    code: `let fruits = ["Apple", "Banana"];
fruits._____("Orange");`,
    answer: "push",
  },
  {
    question: "What method removes the last element from an array?",
    code: `let fruits = ["Apple", "Banana"];
fruits._____();`,
    answer: "pop",
  },
  {
    question: "What property gets the number of elements in an array?",
    code: `let numbers = [1, 2, 3, 4];
console.log(numbers._____);`,
    answer: "length",
  },
  {
    question: "What method converts a string into lowercase letters?",
    code: `let text = "HELLO";
console.log(text._____());`,
    answer: "toLowerCase",
  },
  {
    question: "What method removes whitespace from both ends of a string?",
    code: `let text = " Hello ";
console.log(text._____());`,
    answer: "trim",
  },
  {
    question: "What method checks whether an array contains a specific value?",
    code: `let colors = ["red", "blue"];
console.log(colors._____ ("red"));`,
    answer: "includes",
  },
  {
    question: "What method combines two arrays into a new array?",
    code: `let first = [1, 2];
let second = [3, 4];
let result = first._____(second);`,
    answer: "concat",
  },
  {
    question: "What operator checks both value and data type equality?",
    code: `console.log(10 _____ "10");`,
    answer: "===",
  },
  {
    question: "What operator represents logical AND?",
    code: `if (age >= 18 _____ hasID) {
  console.log("Allowed");
}`,
    answer: "&&",
  },
  {
    question: "What operator represents logical OR?",
    code: `if (isAdmin _____ isManager) {
  console.log("Access granted");
}`,
    answer: "||",
  },
  {
    question: "What keyword is used to stop a loop immediately?",
    code: `for (let i = 0; i < 10; i++) {
  if (i === 5) {
    _____;
  }
}`,
    answer: "break",
  },
  {
    question: "What keyword skips the current loop iteration?",
    code: `for (let i = 0; i < 5; i++) {
  if (i === 2) {
    _____;
  }
  console.log(i);
}`,
    answer: "continue",
  },
  {
    question: "What method executes a callback for every array element?",
    code: `let numbers = [1, 2, 3];
numbers._____(number => console.log(number));`,
    answer: "forEach",
  },
  {
    question: "What method creates a new array by transforming each element?",
    code: `let numbers = [1, 2, 3];
let doubled = numbers._____(number => number * 2);`,
    answer: "map",
  },
  {
    question: "What method returns elements that satisfy a condition?",
    code: `let numbers = [1, 2, 3, 4];
let result = numbers._____(number => number > 2);`,
    answer: "filter",
  },
  {
    question:
      "What method returns the first element that satisfies a condition?",
    code: `let numbers = [10, 20, 30];
let result = numbers._____(number => number > 15);`,
    answer: "find",
  },
  {
    question: "What method converts a JSON string into a JavaScript object?",
    code: `let data = '{"name":"John"}';
let user = JSON._____(data);`,
    answer: "parse",
  },
  {
    question: "What method converts a JavaScript object into a JSON string?",
    code: `let user = { name: "John" };
let data = JSON._____(user);`,
    answer: "stringify",
  },
  {
    question: "What keyword is used to handle errors in a try block?",
    code: `try {
  riskyOperation();
} _____ (error) {
  console.log(error);
}`,
    answer: "catch",
  },
  {
    question: "What keyword waits for a Promise to finish?",
    code: `async function getData() {
  const response = _____ fetch("/api/users");
}`,
    answer: "await",
  },
  {
    question: "What keyword marks a function as asynchronous?",
    code: `_____ function getData() {
  return fetch("/api/users");
}`,
    answer: "async",
  },
  {
    question: "What method selects an HTML element using its ID?",
    code: `const element = document._____("#title");`,
    answer: "querySelector",
  },
  {
    question: "What method selects an element using its ID directly?",
    code: `const element = document._____ ("title");`,
    answer: "getElementById",
  },
  {
    question: "What property changes the text content of an HTML element?",
    code: `document.querySelector("#title")._____ = "Welcome";`,
    answer: "textContent",
  },
  {
    question: "What method attaches an event listener to an HTML element?",
    code: `button._____ ("click", () => {
  alert("Clicked!");
});`,
    answer: "addEventListener",
  },
  {
    question: "What method prevents the default behavior of an event?",
    code: `form.addEventListener("submit", (event) => {
  event._____();
});`,
    answer: "preventDefault",
  },
  {
    question: "What keyword creates a new object instance?",
    code: `const date = _____ Date();`,
    answer: "new",
  },
  {
    question: "What keyword is used to import code from another module?",
    code: `_____ { add } from "./math.js";`,
    answer: "import",
  },
  {
    question: "What keyword makes code available to other modules?",
    code: `_____ const PI = 3.14;`,
    answer: "export",
  },
  {
    question:
      "What operator provides a default value when the left side is null or undefined?",
    code: `let username = user.name _____ "Guest";`,
    answer: "??",
  },
  {
    question:
      "What operator is used to access a property only when the object is not null or undefined?",
    code: `console.log(user_____.name);`,
    answer: "?.",
  },
  {
    question:
      "What syntax is used to insert a variable inside a template literal?",
    code: "let message = `Hello, ${_____}`;",
    answer: "name",
  },
  {
    question: "What method converts a string into a number?",
    code: `let age = Number._____("25");`,
    answer: "parseInt",
  },
  {
    question: "What method checks whether a value is not a number?",
    code: `console.log(Number._____(value));`,
    answer: "isNaN",
  },
  {
    question: "What method rounds a number to the nearest integer?",
    code: `console.log(Math._____(4.7));`,
    answer: "round",
  },
  {
    question: "What method generates a random decimal number between 0 and 1?",
    code: `let random = Math._____();`,
    answer: "random",
  },
  {
    question: "What method returns the largest number from a list of values?",
    code: `console.log(Math._____(10, 20, 30));`,
    answer: "max",
  },
  {
    question: "What method returns the smallest number from a list of values?",
    code: `console.log(Math._____(10, 20, 30));`,
    answer: "min",
  },
  {
    question:
      "What keyword is used to create a conditional expression in a single line?",
    code: `let result = age >= 18 _____ "Adult" : "Minor";`,
    answer: "?",
  },
  {
    question: "What method converts an array into a string with a separator?",
    code: `let fruits = ["Apple", "Banana"];
console.log(fruits._____(", "));`,
    answer: "join",
  },
];
