// Create a boolean variable to track the mode
let darkMode = false;

/* NEW FUNCTIOM: document.querySelector()
   lets you selecct any HTML element using its tag, class or id
*/

//const (not let) to store references to HTML elements (like pointers that dont change)
const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");

// Change HTML & CSS properties of these elements
heading.textContent = "Light Mode & Dark Mode Website";
heading.style.color = "blue"; // Js wrote CSS code
