// Solicita ao usuário que informe a idade
let idade = prompt("Digite sua idade:");

// Converte a entrada para número
idade = Number(idade);

// Verifica se a idade é maior ou igual a 18
if (idade >= 18) {
    alert("Você é maior de idade.");
} else {
    alert("Você é menor de idade.");
}