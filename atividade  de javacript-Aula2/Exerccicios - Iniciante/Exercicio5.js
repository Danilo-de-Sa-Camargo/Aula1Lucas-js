// Solicita que o usuário insira sua idade e converte para número
const idade = Number(prompt("Digite sua idade:"));

// Verifica se a entrada é um número válido
if (Number.isNaN(idade)) {
    console.log("Idade inválida! Por favor, digite um número.");
} else {
    // Verifica em qual faixa de idade o usuário se encaixa
    if (idade >= 0 && idade <= 12) {
        console.log("Você é uma Criança.");
    } else if (idade >= 13 && idade <= 17) {
        console.log("Você é um Adolescente.");
    } else if (idade >= 18) {
        console.log("Você é um Adulto.");
    } else {
        console.log("Idade inválida! Número negativo não é válido.");
    }
}
