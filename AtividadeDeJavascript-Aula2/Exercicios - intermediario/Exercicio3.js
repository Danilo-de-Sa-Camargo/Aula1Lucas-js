const compra = Number(prompt("Digite o valor da compra: "));

if (Number.isNaN(compra)) {
    alert("Valor inválido, digite um número!");
} else if (compra > 100) {
    // Calcula 10% de desconto
    const desconto = compra * 0.10;
    const valorFinal = compra - desconto;
    alert("Você tem direito a 10% de desconto. Valor final: " + valorFinal);
} else {
    alert("Valor final: " + compra);
}
