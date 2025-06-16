     
        function calculateTAX() {
            const salary = parseFloat(document.getElementById('salary').value) || 0;
           
            const rental = parseFloat(document.getElementById('rental').value) || 0;
            const other = parseFloat(document.getElementById('other').value) || 0;
            const sec80c = Math.min(parseFloat(document.getElementById('sec80c').value) || 0, 150000);
            const sec80d = Math.min(parseFloat(document.getElementById('sec80d').value) || 0, 25000);
            const hra = parseFloat(document.getElementById('hra').value) || 0;

            const totalIncome = salary + rental + other;
            const totalDeductions = sec80c + sec80d + hra;
            const taxableIncome = Math.max(0, totalIncome - totalDeductions);

            let tax = 0;
            if (taxableIncome <= 250000) {
                tax = 0;
            } else if (taxableIncome <= 500000) {
                tax = (taxableIncome - 250000) * 0.05;
            } else if (taxableIncome <= 1000000) {
                tax = 12500 + (taxableIncome - 500000) * 0.2;
            } else {
                tax = 112500 + (taxableIncome - 1000000) * 0.3;
            }

            document.getElementById('total-income').innerText = '₹' + totalIncome.toLocaleString('en-IN');
            document.getElementById('total-deductions').innerText = '₹' + totalDeductions.toLocaleString('en-IN');
            document.getElementById('tax-payable').innerText = '₹' + tax.toLocaleString('en-IN');
        }
    
        function reCalculate(){
            const salary = document.getElementById('salary').value='';
           
            const rental = document.getElementById('rental').value=''
            const other = document.getElementById('other').value=''
            const sec80c = document.getElementById('sec80c').value=''
            const sec80d = document.getElementById('sec80d').value=''
            const hra = document.getElementById('hra').value=''
        }