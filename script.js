document.getElementById('pisForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const pis = document.getElementById('pisInput').value;

  if (pis.length !== 10 || !/^\d+$/.test(pis)) {
    alert('Por favor, insira exatamente os 10 primeiros números do CPF.');
    return;
  }

  let soma = 0;
  const pesos = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2]; // números multiplicadores conforme a fórmula

  for (let i = 0; i < 10; i++) {
    soma += parseInt(pis.charAt(i)) * pesos[i];
  }

  let digitoVerificador = soma % 11;

  if (digitoVerificador < 2 || digitoVerificador === 10) {
    digitoVerificador = 0; // Se o resultado for menor que 2 ou igual a 10, o dígito verificador será 0
  } else {
    digitoVerificador = 11 - digitoVerificador; // Calculando o dígito verificador
  }

  // Exibindo o CPF completo com o dígito verificador
  document.getElementById('resultado').innerText = `O PIS/PASEP completo é: ${pis}${digitoVerificador}`;
});