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

// Function to allow draggable vegetable image to be dropped
function allowDrop(e) {
    e.preventDefault();
}

//Function that tells data what to do when dragging begins
function dragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
}

//Function that 
function dragDrop(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}
