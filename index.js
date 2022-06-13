const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso",
  "Pergunte novamente mais tarde",
  "Sim, definitivamente",
  "Minha resposta é não",
  "Você pode contar com isso",
  "Melhor não te dizer agora",
  "A meu ver sim",

]


//dar a resposta só quando clicar em fazer pergunta
function fazerPergunta(){
  if(inputPergunta.value ==""){
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"  

  //gerar resposta aleatória
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // Para resposta sumir depois de 3 segundos
  //através de uma função anonima
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  },3000)
}