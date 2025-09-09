**Exercícios laço de repetição**

*Nível Básico*

//1- Contagem de 1 a 10:
//a) Use um for para exibir os números de 1 a 10 no console.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

------------------------------------------------------------------------------------------------------------------

//2- Tabuada de um número: (vamos fazer do 1 ao 9)
//a) Peça um número ao usuário.
//b) Exiba a tabuada desse número de 1 a 10 usando um for.

for (let numero = 1; numero <=9; numero++){
    console.log(`---Tabuada do ${numero}---`);

    for (let i = 1; i <=10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
    console.log("\n") //pula uma linha
}

---------------------------------------------------------------------------------------------------------------------

//3- Soma dos primeiros N números naturais:
//a) Peça um número N ao usuário.
//b) Use um while ou for para somar os números de 1 até N.
//Exemplo:
//Se um usuário inserir o número 4, o código deverá fazer a soma do 1, 2, 3 e 4 totalizando 10.
//1 + 2 + 3 + 4 = 10

//Se um usuário inserir o número 6, o código deverá fazer a soma do 1, 2, 3, 4 , 5 e 6 totalizando 21.
//1 + 2 + 3 + 4 + 5 + 6 = 21

//COM WHILE


//COM FOR
let N = Number(prompt("Digite um número N:"));
let soma = 0;

for (let i = 1; i <= N; i++) {
    soma += i; 
}

alert("A soma dos números " + N + " números naturais é: " + soma);

-----------------------------------------------------------------------------------------------------------------------

*Nível Intermediário*

//1- Exibir os números pares de 1 a 50:
//a) Use um for ou while para exibir apenas os números pares de 1 a 50.

//COM WHILE
let i = 1;
while (i <= 50) {
    if (i % 2 === 0) { 
        alert(i);
    }
    i++;
}

//COM FOR

---------------------------------------------------------------------------------------------------------------------------

//2- Jogo de adivinhação:
//a) Gere um número aleatório de 1 a 100.
//b) Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
//c) Informe se o número inserido é maior ou menor que o correto.

let secreto = Math.floor (Math.random() * 100) +1;
let tentativas;

while(tentativas !== secreto) {
    tentativas = Number(prompt("Adivinhe o número entre 1 e 100:"))

    if (tentativas > secreto) {
        alert ("Tente um número menor!")
    } else if (tentativas < secreto) {
        alert ("Tente um número maior!")
    } else {
        alert ("Parabéns, você acertou!!!!!")
    }
}

//OUTRO JOGO (desarmar bomba)

let secreto = Math.floor (Math.random() * 50) +1;
let tempo = 10;
let tentativas;
let desarmou = false;

alert ("Uma bomba foi ativada!!");
alert ("Você precisa adivinhar o número secreto entre 1 e 50 para desarma-la.");
alert ("Você tem apenas" + "tempo" + "tentativas..... Boa sorte!")

const somExplosao = new Audio("")//colocar audio

while (tempo > 0 && !desarmou) {
    tentativas = Number(prompt(`Digite sua tentativa (restam ${tempo} tentativas)`))

    if (tentativas === secreto) {
        alert ("Você acertou! A bomba foi desarmada a tempo!")
        desarmou = true;
    } else if (tentativas > secreto) {
        alert ("Número errado! A dica: tente número menor!!")
    }else if (tentativas > secreto) {
            alert ("Número errado! A dica: tente número maior!!")
    }
    tempo--;
}

if (!desarmou) {
    alert("BOOOOOM!! A bomba explodiu!! Fim de jogo");
    somExplosao.play();
}

---------------------------------------------------------------------------------------------------------------------------

//3- Contagem regressiva:
//a) Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um while.

---------------------------------------------------------------------------------------------------------------------------