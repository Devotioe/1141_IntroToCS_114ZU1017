document.addEventListener('DOMContentLoaded', function() {
    
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operatorSelect = document.getElementById('operator');
    const calcBtn = document.getElementById('calcBtn');
    const resultSpan = document.getElementById('result');

    function add(a, b) { return a + b; }
    function subtract(a, b) { return a - b; }
    function multiply(a, b) { return a * b; }
    function divide(a, b) {
        if (b === 0) {
            alert("Error: Division by zero"); 
            return null;
        }
        return a / b;
    }

    calcBtn.addEventListener('click', function() {
        const n1 = parseFloat(num1Input.value);
        const n2 = parseFloat(num2Input.value);
        const op = operatorSelect.value;
        let finalResult = 0;

        if (isNaN(n1) || isNaN(n2)) {
            alert("Please enter valid numbers");
            return;
        }

        switch (op) {
            case '+':
                finalResult = add(n1, n2);
                break;
            case '-':
                finalResult = subtract(n1, n2);
                break;
            case '*':
                finalResult = multiply(n1, n2);
                break;
            case '/':
                finalResult = divide(n1, n2);
                if (finalResult === null) return; 
                break;
        }

        resultSpan.textContent = finalResult.toFixed(2);
    });
});