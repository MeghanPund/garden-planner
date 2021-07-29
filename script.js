// show/hide hamburger menu on click!
function showNav() {
    const navIcon = document.getElementById("navLinks");
    if (navIcon.style.display === "block") {
        navIcon.style.display = "none";
      } else {
        navIcon.style.display = "block";
      }
}

// get the name input from the HTML form and display it at the top of the page
function getName() {
    const userName = document.getElementById('name').value;

    if (userName !== "" && userName !== " ") {
    document.getElementById("helloUser").innerHTML = `Hello, ${userName}! Welcome to Garden Planner.`;
    document.getElementById('name').value = '';}
    }

// get the email input from the HTML form, make sure it has an "@" and a ".", and alert user that email has been accepted
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

let dragon;

document.addEventListener("dragstart", function(event) {
  // store info for element being dragged
  dragon = event.target;
  // change opacity of vegetable while dragged
  dragon.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // return vegetable to normal after dragging
  dragon.style.opacity = "";
}, false);

// events fired on the drop targets
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
  // prevent default action
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "gardenDropBox") {
    event.target.style.background = "";
    event.target.appendChild( dragon );
  }
}, false);