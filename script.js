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
const image = document.querySelector("#image");

// Change HTML & CSS properties of these elements
heading.textContent = "Light Mode & Dark Mode Website";
heading.style.color = "blue"; // Js wrote CSS code

// Define what happens when button is clicked
function toggleMode() {
   console.log("function triggered");
   // 1. Flip the boolean value
   darkMode = !darkMode;
   console.log(darkMode);

   // 2. Conditionally apply styles based on mode
   if (darkMode == true) { 
      console.log("apply dark mode styles")
      body.style.background = "black";
      heading.style.color = "lightpink";
      description.style.color = "white";
      description.textContent = "Welcome to the dark side!";
      description.style.fontFamily = "Charcoal,Impact,sans-serif";
      toggleBtn.textContent = "Switch to Light";
      toggleBtn.style.color = "blue";
      toggleBtn.style.background = "hotpink";
      toggleBtn.style.textDecoration = "underline";
      image.src = "dark.jpeg"
      image.style.padding = "40px 10px 30px 30px";

   }
   else {
      console.log("apply light mode styles")
      body.style.background = "white";
      heading.style.color = "purple";
      description.style.color ="black";
      description.textContent ="Welcome to light mode!";
      toggleBtn.textContent = "Switch to dark";
      toggleBtn.style.color = "rgb(251, 102, 102)";
      toggleBtn.style.background = "lightyellow";
      image.src = "light.jpg";
      

   }

}
// Attach the function to the button
toggleBtn.addEventListener("click", toggleMode);  
