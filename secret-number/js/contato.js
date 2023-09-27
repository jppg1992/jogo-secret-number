document.getElementById("enviarEmailLink").addEventListener("click", function (event) {
  // Obtém os valores dos campos de entrada
  var nome = document.getElementById("nome").value;
  var assunto = document.getElementById("assunto").value;
  var mensagem = document.getElementById("mensagem").value;
  if (!nome || !assunto || !mensagem) {
    alert("Por favor informe todos ao campos !!");
    return null;
  }
  // Constrói o URL com os valores dos campos
  var url = `mailto:joaogodinho.bg021@academico.ifsul.edu.br?subject=${encodeURIComponent(
    assunto
  )}&body=Nome:%20${encodeURIComponent(nome)}%0D%0AMensagem:%20${encodeURIComponent(
    mensagem
  )}%0D%0AAtenciosamente,%0D%0A${encodeURIComponent(nome)}`;
  // Define o atributo href do link com o URL construído
  this.href = url;
});
