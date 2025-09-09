const num1 = Number(prompt("Digite o primeiro numero"));
const num2 = Number(prompt("Digite o primeiro numero"))

const operacao = prompt("Digite a operação (+, -, *, /):")

if (Number.isNaN(num1) || Number.isNaN(num2) ) {
 alert("valor invalido, digite um numero!")
} else {
    switch (operacao) {

        case "+":
            alert("O resultado é :" + (num1+num2))
            break;
        case "-":
            alert("O resultado é :" + (num1-num2))
            break;
        case "*":
            alert("O resultado é :" + (num1*num2))
            break;
        case "/":
            if(num2 === 0){
                alert("Erro: Divisão por 0")
            }else{
                alert("O resultado é: " + num1 / num2)
            }
            break;

        default:
            break;
    }

}