// script.js
const validUsername = 'user123';
const validPassword = 'password123';

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    if (username === validUsername && password === validPassword) {
        // Successful login, redirect to products page
        window.location.href = 'products.html';
    } else {
        // Failed login, show error message
        errorMsg.textContent = 'Invalid username or password!';
    }
});
