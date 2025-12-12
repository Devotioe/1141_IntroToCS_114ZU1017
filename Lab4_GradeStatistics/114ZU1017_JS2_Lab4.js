document.addEventListener('DOMContentLoaded', function() {
    const mathInput = document.getElementById('mathInput');
    const englishInput = document.getElementById('englishInput');
    const submitBtn = document.getElementById('submitBtn');
    const tbody = document.querySelector('#gradeTable tbody');
    
    let mathScores = [];
    let englishScores = [];
    let rowCount = 0;

    submitBtn.addEventListener('click', function() {
        const math = parseFloat(mathInput.value);
        const english = parseFloat(englishInput.value);

        if (isNaN(math) || isNaN(english)) {
            alert("Please enter valid numbers for both grades.");
            return;
        }

        rowCount++;


        const rowAvg = ((math + english) / 2).toFixed(2);

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td>${math}</td>
            <td>${english}</td>
            <td>${rowAvg}</td>
        `;
        tbody.appendChild(newRow);

       
        mathScores.push(math);
        englishScores.push(english);

        
        updateColumnAverages();
        
   
        mathInput.value = '';
        englishInput.value = '';
    });

    function updateColumnAverages() {
        const totalMath = mathScores.reduce((a, b) => a + b, 0);
        const totalEng = englishScores.reduce((a, b) => a + b, 0);
        const count = mathScores.length;

        if (count > 0) {
            const avgMath = (totalMath / count).toFixed(2);
            const avgEng = (totalEng / count).toFixed(2);
            const avgOverall = ((parseFloat(avgMath) + parseFloat(avgEng)) / 2).toFixed(2);

            document.getElementById('avgMath').textContent = avgMath;
            document.getElementById('avgEng').textContent = avgEng;
            document.getElementById('avgTotal').textContent = avgOverall; // [cite: 16]
        }
    }
});