// cart.js

// Retrieve the cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart table
function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const subtotalEl = document.getElementById('subtotal');
  const taxesEl = document.getElementById('taxes');
  const totalEl = document.getElementById('total');

  cartItemsContainer.innerHTML = ''; // Clear existing items

  let subtotal = 0;

  // Populate the cart table with items
  cart.forEach((item, index) => {
    const total = (item.price * item.quantity).toFixed(2);
    subtotal += item.price * item.quantity;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>
        <input type="number" min="1" value="${item.quantity}" 
               data-index="${index}" class="quantity-input">
      </td>
      <td>$${total}</td>
      <td><button class="remove-item" data-index="${index}">Remove</button></td>
    `;
    cartItemsContainer.appendChild(row);
  });

  // Calculate subtotal, taxes, and total
  const taxes = (subtotal * 0.15).toFixed(2);  // Assuming 15% tax rate
  const total = (parseFloat(subtotal) + parseFloat(taxes)).toFixed(2);

  // Update the cart summary
  subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  taxesEl.innerText = `$${taxes}`;
  totalEl.innerText = `$${total}`;

  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Event listener for quantity changes
document.addEventListener('change', (event) => {
  if (event.target.classList.contains('quantity-input')) {
    const index = event.target.getAttribute('data-index');
    const newQuantity = parseInt(event.target.value);
    
    // Update cart with new quantity
    cart[index].quantity = newQuantity > 0 ? newQuantity : 1;
    updateCart();
  }
});

// Event listener for removing items
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-item')) {
    const index = event.target.getAttribute('data-index');
    
    // Remove the item from the cart
    cart.splice(index, 1);
    updateCart();
  }
});

// Checkout button event
document.querySelector('.checkout-btn').addEventListener('click', () => {
  // Store cart for invoice page
  localStorage.setItem('invoice', JSON.stringify(cart));
  window.location.href = 'invoice.html';  // Redirect to invoice page
});

// Cancel button event
document.querySelector('.cancel-btn').addEventListener('click', () => {
  cart = [];
  updateCart();
  alert('Your cart has been cleared.');
});

// Initial cart update
updateCart();
