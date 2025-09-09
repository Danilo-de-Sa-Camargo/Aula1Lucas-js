// Solicita ao usuário para inserir um número e converte para tipo Number
const numero = Number(prompt("Digite um número:"));

// Verifica se a entrada é um número válido
if (Number.isNaN(numero)) {
    console.log("Valor inválido! Por favor, digite um número.");
} else {
    // Usa o operador % para verificar se o número é par ou ímpar
    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }
}
