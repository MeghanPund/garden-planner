// WORKING ON THIS PROJECT AS OF 7/22
// Function to show/hide hamburger menu on click!
function showNav() {
    const navIcon = document.getElementById("navLinks");
    if (navIcon.style.display === "block") {
        navIcon.style.display = "none";
      } else {
        navIcon.style.display = "block";
      }
}

// Function to get the name input from the HTML form and display it at the top of the page
function getName() {
    const userName = document.getElementById('name').value;

    if (userName !== "" && userName !== " ") {
    document.getElementById("helloUser").innerHTML = `Hello, ${userName}! Welcome to Garden Planner.`;
    document.getElementById('name').value = '';}
    }

// Function to get the email input from the HTML form, make sure it has an "@" and a ".", and alert user that email has been accepted
function getEmail() {
    const userEmail = document.getElementById('email').value;
        
    if (userEmail.includes("@") && userEmail.includes(".")) {
        alert(`Thanks, ${userEmail}!`);
    } else {
        alert("Something appears to be wrong with the email you have entered. Please double-check your entry.");
    }

    document.getElementById('email').value = '';
}

// Drag and drop begins here 

let dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;

  dragged.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {

  dragged.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "gardenDropBox") {
    event.target.style.background = "green";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "gardenDropBox") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "gardenDropBox") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

// Snapping begins here. I created a bunch of div elements within the garden div, and each div can hold one vegetable.

document.addEventListener('DOMContentLoaded', function() {
  for (let i = 0; i < 50; i++) {
  var div = document.createElement('div');
  div.id = 'container';
  div.className = 'gardenDropBox';
  let mamaDiv = document.getElementById('garden').parentNode;
  let child = document.getElementById('garden');
  mamaDiv.insertAdjacentElement('beforeend', child);
  }
}, false);