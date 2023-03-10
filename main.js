const randomNumber = Math.round(Math.random() * 10) /*numero randomico*/
let xAttempts = 1

function handleClick(event) {/*toda vez que eu clicar no botão, ira pegar a linha a baixo*/
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber") 
  /*peguei no documento e fiz a pesquisa pelo seletor de id "inputNumber, 
  coloquei numa variavel e logo abaixo estou imprimindo na tela*/
  
  if(Number(inputNumber.value) == randomNumber) {/*esta verificando se vou acertar o numero*/
document.querySelector(".screen1").classList.add("hide") /*está adicionando a classe "Hide" ao screen1*/
document.querySelector(".screen2").classList.remove("hide") /*removendo a classe hide do screen2*/

console.log(`acertou em ${xAttempts} tentativas`)
}

xAttempts++
  
}