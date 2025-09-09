const nota = Number(prompt("Digite sua nota na prova"))

if (Number.isNaN(nota)) {
    // Se não for um número (ex: se o usuário digitou letras), mostra mensagem de erro
    console.log("Número inválido!");
} else {
     // Se for um número válido, verifica se ele é positivo, negativo ou zero
    if (nota >= 60) {
        // Se o número for maior que 60, esta aprovado
        console.log("Você está aprovado");
    } else if (nota < 60) {
        // Se o número for menor que 60, ele foi reprovado
        console.log("Você está reprovado");
    }
}