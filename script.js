function calculateEMI() {
  const principal = parseFloat(document.getElementById('amount').value);
  const annualRate = parseFloat(document.getElementById('rate').value);
  const years = parseFloat(document.getElementById('tenure').value);

  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;

  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
              (Math.pow(1 + monthlyRate, months) - 1);

  const emiResult = document.getElementById('emiResult');
  if (isNaN(emi)) {
    emiResult.innerText = "Please enter valid input.";
  } else {
    emiResult.innerText = `Monthly EMI: ₹${emi.toFixed(2)}`;
  }
}