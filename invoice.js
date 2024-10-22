// invoice.js
const cart = JSON.parse(localStorage.getItem('cart')) || [];

function calculateInvoice() {
    const tbody = document.querySelector('#invoiceTable tbody');
    let subtotal = 0;

    cart.forEach(product => {
        const row = document.createElement('tr');

        const productName = document.createElement('td');
        productName.textContent = product.name;
        row.appendChild(productName);

        const productQty = document.createElement('td');
        productQty.textContent = 1; // For simplicity, quantity is set to 1
        row.appendChild(productQty);

        const productPrice = document.createElement('td');
        productPrice.textContent = `$${product.price.toFixed(2)}`;
        row.appendChild(productPrice);

        const productSubtotal = document.createElement('td');
        productSubtotal.textContent = `$${product.price.toFixed(2)}`;
        row.appendChild(productSubtotal);

        subtotal += product.price;

        tbody.appendChild(row);
    });

    const tax = subtotal * 0.10;  // Assume 10% tax
    const total = subtotal + tax;

    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

calculateInvoice();

document.getElementById('cancel').addEventListener('click', () => {
    localStorage.removeItem('cart');
    alert('Invoice canceled. Cart cleared.');
    window.location.href = 'products.html';
});

document.getElementById('exit').addEventListener('click', () => {
    window.location.href = 'index.html';
});
