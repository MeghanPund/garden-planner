// Function to get the name input from the HTML form and display it at the top of the page
function getName() {
    const userName = document.getElementById('name').value;
    document.getElementById("helloUser").innerHTML = `Hello, ${userName}! Welcome to Garden Planner.`;
    }

// Function to get the email input from the HTML form, make sure it has an "@" and a ".", and alert user that email has been accepted
function getEmail() {
    const userEmail = document.getElementById('email').value;
        
    if (userEmail.includes("@") && userEmail.includes(".")) {
        alert(`Thanks, ${userEmail}!`);
    } else {
        alert("Something appears to be wrong with the name you have entered. Please double-check your entry.");
    }
}