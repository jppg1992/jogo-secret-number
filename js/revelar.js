const diferenca = (v1, v2) => {
  if (v1 > v2) {
    return v1 - v2;
  }
  return v2 - v1;
};

const revelarOnePlayer = (valor1, valor2) => {
  let numeroAleatorio = 0;
  function alterarNumero() {
    // Gere um número aleatório de 1 a 10
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    // Atualize o valor do h1 com o número aleatório
    document.getElementById("secretNumber").textContent = numeroAleatorio;
  }

  // Chame a função inicialmente
  alterarNumero();

  // Agende a função para ser chamada a cada 800 milissegundos (0.8 segundo) durante 10 segundos
  const intervalo = setInterval(alterarNumero, 800);
  setTimeout(() => {
    // Pare o intervalo após 10 segundos
    clearInterval(intervalo);
    let mensagem = "";
    if (numeroAleatorio == valor1 && numeroAleatorio == valor2) {
      mensagem = "Parabéns players 1 e 2 vocês acertaram o número secreto: " + numeroAleatorio;
    } else if (valor1 != numeroAleatorio && !valor2) {
      mensagem = "Não foi dessa vez player, você não acertou o número secreto era " + numeroAleatorio;
    } else if (numeroAleatorio == valor1) {
      mensagem = "Parabéns player 1 você acertou o número secreto: " + numeroAleatorio;
    } else if (numeroAleatorio == valor2) {
      mensagem = "Parabéns player 2 você acertou o número secreto: " + numeroAleatorio;
    } else if (diferenca(valor1, numeroAleatorio) < diferenca(valor2, numeroAleatorio)) {
      mensagem = "Parabéns player 1 seu palpite " + valor1 + " chegou mais perto do número secreto " + numeroAleatorio;
    } else if (diferenca(valor2, numeroAleatorio) < diferenca(valor1, numeroAleatorio)) {
      mensagem = "Parabéns player 2 seu palpite " + valor2 + " chegou mais perto do número secreto " + numeroAleatorio;
    }
    alert(mensagem);
    window.location.reload();
  }, 10000);
};

document.getElementById("meuFormulario").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o envio padrão do formulário
  revelarOnePlayer(document.getElementById("player1Input").value, document.getElementById("player2Input")?.value ?? "");
});
