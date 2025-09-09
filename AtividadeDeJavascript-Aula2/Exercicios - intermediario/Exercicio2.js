

const numA = Number(prompt("Digite o primeiro número: "));
const numB = Number(prompt("Digite o segundo número: "));
const numC = Number(prompt("Digite o terceiro número: "));

if (Number.isNaN(numA) || Number.isNaN(numB) || Number.isNaN(numC)) {
    alert("Valor inválido, digite um número!");
} else if (numA > numB && numA > numC) {
    alert("O número 1 é o maior valor entre os três");
} else if (numB > numC && numB > numA) {
    alert("O número 2 é o maior valor entre os três");
} else if (numC > numB && numC > numA) {
    alert("O número 3 é o maior valor entre os três");
} else {
    alert("Existe pelo menos dois números iguais ou todos são iguais.");
}
