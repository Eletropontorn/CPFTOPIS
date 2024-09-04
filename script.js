document.getElementById('pisForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const pis = document.getElementById('pisInput').value;

  if (pis.length !== 10 || !/^\d+$/.test(pis)) {
    alert('Por favor, insira exatamente os 10 primeiros números do CPF.');
    return;
  }

  let soma = 0;
  const pesos = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2]; // Pesos usados no cálculo

  for (let i = 0; i < 10; i++) {
    soma += parseInt(pis.charAt(i)) * pesos[i];
  }

  let digitoVerificador = 11 - (soma % 11);
  if (digitoVerificador === 10 || digitoVerificador === 11) {
    digitoVerificador = 0; // Se o dígito verificador for 10 ou 11, ele deve ser 0
  }

  // Exibindo o PIS/PASEP completo com o dígito verificador
  document.getElementById('resultado').innerText = `O PIS/PASEP completo é: ${pis}${digitoVerificador}`;
});
