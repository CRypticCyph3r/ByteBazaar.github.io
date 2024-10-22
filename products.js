const products = [
    { id: 1, name: 'Intel Core i9 Processor', price: 500.00 },
    { id: 2, name: 'ASUS ROG Motherboard', price: 300.00 },
    { id: 3, name: 'NVIDIA RTX 3080', price: 700.00 },
    { id: 4, name: 'Corsair Vengeance 32GB RAM', price: 150.00 },
    { id: 5, name: 'Samsung 970 EVO SSD 1TB', price: 100.00 },
    { id: 6, name: 'Corsair Hydro Series CPU Cooler', price: 130.00 },
    { id: 7, name: 'EVGA 650W Power Supply', price: 85.00 },
    { id: 8, name: 'NZXT H510 PC Case', price: 90.00 },
    { id: 9, name: 'LG UltraGear 27" Gaming Monitor', price: 250.00 }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = parseInt(e.target.getAttribute('data-product-id'));
        const product = products.find(p => p.id === productId);
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} has been added to your cart.`);
    });
});

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'invoice.html';
    } else {
        alert('Your cart is empty!');
    }
});

document.getElementById('cancel').addEventListener('click', () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Cart has been cleared.');
});

document.getElementById('exit').addEventListener('click', () => {
    window.location.href = 'index.html';
});
