document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtém o valor digitado pelo usuário
    const saldoFgts = parseFloat(document.getElementById('saldoFgts').value);
  
    // Calcula o lucro do FGTS
    const lucroPor100Reais = 2.46157439850502219107685120299;
    const lucroTotal = (saldoFgts / 100) * lucroPor100Reais;
  
    // Exibe o resultado na tela
    document.getElementById('resultado').textContent = `Seu lucro do FGTS é: R$ ${lucroTotal.toFixed(2)}`;
  });
  