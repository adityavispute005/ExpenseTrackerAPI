let expenses = [];

function addExpense() {
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    if (category && amount) {
        const expense = {
            category,
            amount,
            description,
        };

        expenses.push(expense);
        displayExpenses();
        updateTotal();
        clearForm();
    } else {
        alert('Please fill in all the fields.');
    }
}

function displayExpenses() {
    const tableBody = document.getElementById('expenseTableBody');
    tableBody.innerHTML = '';

    expenses.forEach(expense => {
        const row = tableBody.insertRow();
        row.innerHTML = `<td>${expense.category}</td><td>${expense.amount}</td><td>${expense.description}</td>`;
    });
}

function updateTotal() {
    const totalElement = document.getElementById('total');
    const totalAmount = expenses.reduce((total, expense) => total + parseInt(expense.amount), 0);
    totalElement.textContent = `Total: INR ${totalAmount}`;
}

function clearForm() {
    document.getElementById('category').value = 'movie';
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
}
