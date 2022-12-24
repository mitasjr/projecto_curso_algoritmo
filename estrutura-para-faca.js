function accaoBotao() {
    var numero, factorial;
numero = prompt("Digite o número para calcular o factorial:")
factorial = 1
contador = contador + 1
for (var contador = 1; contador <= numero; contador ++){
    factorial = factorial * contador;
}   

document.getElementById("paragrafo").innerText = "O factorial de " + numero + " é: " + factorial
}
