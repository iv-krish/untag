let shoppingBag = [
    { name: 'Product 1', quantity: 2, price: 100 },
    { name: 'Product 2', quantity: 1, price: 150 },
    { name: 'Product 3', quantity: 3, price: 200 },
];

let tableBody = document.getElementById('bag-table').getElementsByTagName('tbody')[0];

shoppingBag.forEach(item => {
    let row = tableBody.insertRow();

    let nameCell = row.insertCell();
    let quantityCell = row.insertCell();
    let priceCell = row.insertCell();
    let totalCell = row.insertCell();

    nameCell.textContent = item.name;
    quantityCell.textContent = item.quantity;
    priceCell.textContent = '$' + item.price;
    totalCell.textContent = '$' + (item.quantity * item.price);
});

let totalAmount = shoppingBag.reduce((sum, item) => sum + (item.quantity * item.price), 0);
document.getElementById('total-amount').textContent = 'Total Amount: $' + totalAmount;

document.getElementById('checkout-button').addEventListener('click', function() {
    alert('Checkout successful! Total amount: $' + totalAmount);
});