// products.js
const products = [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 20.00 },
    { id: 3, name: 'Product 3', price: 30.00 },
    // Add more products as needed
];

let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = parseInt(e.target.getAttribute('data-product-id'));
        const product = products.find(p => p.id === productId);
        cart.push(product);
        alert(`${product.name} has been added to your cart.`);
    });
});

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        // Store cart in local storage for access on invoice page
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'invoice.html';
    } else {
        alert('Your cart is empty!');
    }
});

document.getElementById('cancel').addEventListener('click', () => {
    cart = [];
    alert('Cart has been cleared.');
});

document.getElementById('exit').addEventListener('click', () => {
    window.location.href = 'index.html';
});
