// invoice.js

// Retrieve the cart (order summary) from localStorage
let invoiceCart = JSON.parse(localStorage.getItem('invoice')) || [];
const invoiceItemsContainer = document.getElementById('invoice-items');
const invoiceTotalEl = document.getElementById('invoice-total');

// Function to generate the invoice
function generateInvoice() {
  invoiceItemsContainer.innerHTML = ''; // Clear existing items
  let totalAmount = 0;

  // Populate the invoice with items
  invoiceCart.forEach(item => {
    const total = (item.price * item.quantity).toFixed(2);
    totalAmount += item.price * item.quantity;

    const itemEl = document.createElement('p');
    itemEl.innerHTML = `${item.quantity} x ${item.name} - $${total}`;
    invoiceItemsContainer.appendChild(itemEl);
  });

  // Calculate the total
  const taxes = (totalAmount * 0.15).toFixed(2);
  const grandTotal = (parseFloat(totalAmount) + parseFloat(taxes)).toFixed(2);

  invoiceTotalEl.innerText = `$${grandTotal}`;

  // Optionally clear cart after confirming order
  document.getElementById('confirm-order').addEventListener('click', () => {
    alert('Thank you for your order!');
    localStorage.removeItem('cart');  // Clear cart after order confirmation
    window.location.href = 'index.html';  // Redirect to home page after confirmation
  });
}

// Generate the invoice when the page loads
generateInvoice();
