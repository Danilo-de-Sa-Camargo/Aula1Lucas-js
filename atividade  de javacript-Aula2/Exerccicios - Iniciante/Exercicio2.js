// Pede ao usuário que digite um número e converte o valor para tipo Number
const numero = Number(prompt("Digite um número:"));

// Verifica se o que foi digitado é realmente um número
if (Number.isNaN(numero)) {
    // Se não for um número (ex: se o usuário digitou letras), mostra mensagem de erro
    console.log("Número inválido!");
} else {
    // Se for um número válido, verifica se ele é positivo, negativo ou zero

    if (numero > 0) {
        // Se o número for maior que zero, é positivo
        console.log("O número é positivo");
    } else if (numero < 0) {
        // Se o número for menor que zero, é negativo
        console.log("O número é negativo");
    } else {
        // Se não for nem maior nem menor, só pode ser zero
        console.log("O número é negativo");
    }
}