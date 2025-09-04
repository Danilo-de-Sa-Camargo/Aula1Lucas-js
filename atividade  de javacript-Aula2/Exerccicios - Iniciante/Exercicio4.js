// Pede ao usuário para inserir um número e converte para tipo Number
const numero = Number(prompt("Digite um número:"));

// Verifica se a entrada é um número válido
if (Number.isNaN(numero)) {
    console.log("Número inválido! Por favor, digite um número.");
} else {
    // Verifica se o número é positivo, negativo ou zero
    if (numero > 0) {
        console.log("O número é positivo.");
    } else if (numero < 0) {
        console.log("O número é negativo.");
    } else {
        console.log("O número é zero.");
    }
}