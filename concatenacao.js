/*
Var
// Seção de Declarações das variáveis 
   nome: caractere
   numero: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
  escreval("Digite o nome:")
  leia(nome)
  escreval("Digite o número:")
  leia(numero)
  
  escreval(nome, " : ", numero)

*/

var nome, numero;

nome = prompt("Digite o seu nome:")
numero = prompt("Digite o seu número:")

document.getElementById("paragrafo").innerText = nome + " : " + numero;