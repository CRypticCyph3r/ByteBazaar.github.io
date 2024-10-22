let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = document.getElementById('cart-items');
const subtotalDisplay = document.getElementById('subtotal');
const taxesDisplay = document.getElementById('taxes');
const totalDisplay = document.getElementById('total');

// Populate the cart when the page loads
populateCart();

function populateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let subtotal = 0;

    cart.forEach((item, index) => {
        const total = item.price; // Assuming 1 quantity for simplicity
        subtotal += total;

        cartItems.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><input type="number" value="1" min="1" data-index="${index}" class="quantity-input" /></td>
                <td>$${total.toFixed(2)}</td>
                <td><button class="remove-btn" data-index="${index}">Remove</button></td>
            </tr>
        `;
    });

    const taxes = subtotal * 0.15; // 15% tax
    const total = subtotal + taxes;

    subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
    taxesDisplay.textContent = `$${taxes.toFixed(2)}`;
    totalDisplay.textContent = `$${total.toFixed(2)}`;
}

// Remove item from cart
cartItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const index = e.target.getAttribute('data-index');
        cart.splice(index, 1); // Remove item from cart
        localStorage.setItem('cart', JSON.stringify(cart));
        populateCart(); // Re-populate cart after removal
    }
});
