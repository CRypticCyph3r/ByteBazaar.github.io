// Default email and password
const defaultEmail = "testuser@bytebazaar.com";
const defaultPassword = "password123";

// Function to validate the login form
function validateLogin() {
  // Get form fields
  const defaultemail = document.getElementById("email").value.trim();
  const defaultpassword = document.getElementById("password").value.trim();

  // Email validation (simple regex for checking email format)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Password validation (minimum 6 characters required)
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  // Check if the entered email and password match the default credentials
  if (email === defaultEmail && password === defaultPassword) {
    alert("Login successful!");
    // Redirect to the products page
    window.location.href = "Products.html";
    return true;
  } else {
    alert("Incorrect email or password. Please try again.");
    return false;
  }
}

// Function to handle cancel button click
function cancelLogin() {
  if (confirm("Are you sure you want to cancel?")) {
    window.location.href = "index.html"; // Redirect to homepage or another page
  }
}

//
function Login() {
      window.location.href = "products.html"; // Redirect to homepage or another page
}
