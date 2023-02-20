const incomeInput = document.getElementById('income');
const expensesInput = document.getElementById('expenses');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

// Add an event listener to the Calculate button
calculateBtn.addEventListener('click', function() {
// Get the income and expenses values
const income = Number(incomeInput.value);
const expenses = Number(expensesInput.value);

// Calculate the budget
const budget = income - expenses;

// Show the result in the resultDiv
resultDiv.textContent = `Your budget is ${budget}`;
});