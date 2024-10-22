// JavaScript code to handle login validation
const users = [
  { email: "user1@example.com", password: "password123" },
  { email: "user2@example.com", password: "password456" },
  { email: "user3@example.com", password: "password789" },
];

function validateLogin(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get email and password input values
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
  
  // Check if the email and password match any of the users
  const user = users.find(u => u.email === emailInput && u.password === passwordInput);
  
  if (user) {
    // If credentials match, redirect to the product.html page
    window.location.href = "products.html";
  } else {
    // If credentials don't match, show an error message
    alert("Invalid email or password. Please try again.");
  }
}
