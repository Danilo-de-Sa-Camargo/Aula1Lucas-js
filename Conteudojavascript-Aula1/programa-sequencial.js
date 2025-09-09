// Entrada
const nome = prompt("Digite seu nome:")

//Processamento
// aqui só aguardamos o valor

// Saída
console.log("Olá, + nome")

------------------------------------------------------------------

//Entrada
const n1 = Number(prompt("Digite o primeiro número"));
const n2 = Number(prompt("Digite o segundo número"));

//Processamento
const soma = n1 + n2;
const dobro = n1 * n2;
//Saída
console.log("Resultado:", soma);
console.log("Resultado:", dobro);

-------------------------------------------------------------------

// Média de dois números 
// Entrada
const n1 = Number(prompt("Digite a primeira nota"));
const n2 = Number(prompt("Digite a segunda nota"));
//Processamento
const media = (n1 + n2) / 2 //tem o () pois ele tem que fazer primeiro a soma e depois a divisão, se deixar sem o() ele vai fazer a regra da matemática que é primeiro a divisão
//Saída
console.log("A média é:" + media)

----------------------------------------------------------------------

// Converter minutos em segundos
// Entrada
const minutos = Number(prompt("Digite a quantidade de minutos"));
// Processamento
const segundos = minutos * 60;
//Saída
console.log(minutos + "minutos = " + segundos + "segundos");

-------------------------------------------------------------------------

// Diferença do let e var 
function exemplo () {
    if (true)  {
        let x = 1 // escopo de bloco só existe dentro do if
        var y = 2// existe porque var "vaza do if"
    }
    console.log(x)
    //console log(y)
}

-------------------------------------------------------------------------

//Alterar variável
const numeros = [1,2,3];

// numeros = [4,5];

numeros.push(4)
console.log(numeros)

------------------------------------------------------------------------

//Tipos primitivos do Java

//NUMBER - usados para números
const preco = 19.9; //não pode usar vírgula, tem que ser ponto
console.log(typeof preco)

//STRING - usado para texto
const nome = "Giovana"
console.log(typeof nome)

//BOOLEAN - verdadeiro ou falso
const ativo = true
console.log(typeof ativo);

//NULL - ausência intencional de valor
const  vazio = null;
console.log(typeof vazio);

//UNDEFINED - variável criada mas sem valor
let indefinido;
console.log(typeof indefinido);

//BIGINT - números muito grandes (terminam com n)
const grande = 900712546987854521n;
console.log(typeof grande);

------------------------------------------------------------------

// Tipos especiais

//NaN e Infinity (NaN é Not a Number)

//Divisão por 0 - infinity
console.log(5 / 0)
//Divisão por número - NaN
console.log("abc" * 3)
console.log(NaN === NaN);

--------------------------------------------------------------------------------------
//STRING
const nomeCompleto = "" ou '' //pode colocar aspas simples ou dupla, vai ler normal
const nomeCompleto = 'Giovana Piotto'
//Tpos que aparecem depois de colocar ponto final
console.log(nomeCompleto.length) //mostra o tamanho do nome
console.log(nomeCompleto.toUpperCase()) //transforma em maiúsculo
console.log(`Olá, ${nomeCompleto} !`); //template string

---------------------------------------------------------------------------------------
//operadores
//+ - * / % **
// == compara só valores, === compara o valor e tipo

console.log(2+3 * 4);
console.log(1 + "2");
console.log( 5 == "5");
console.log( 5 === "5")
console.log( 5 != "5")
console.log( 5 !== "5")

---------------------------------------------------------------------------------------
// IMC Indice de Massa Corporal

const peso = Number(prompt("Peso (KG):"));
const altura = Number (prompt ("altura (m):"));
//processamento
const imc = peso / (altura ** 2);
//saide
console.log('IMC: ${imc.tofixed(2)}')


------------------------------------------------------------------------------------------
//Celsiu => Fahrenit

//entrada
const c = Number(prompt("Celsiu:"));
//processamento
const F = (c * 9/5) + 32:
console.log(`${c}C = ${F.toFixed(1)}F`)

-------------------------------------------------------------------------------------------

//teste - 1

const nome = prompt("Digite seu nome:");
console.log(`olá, ${nome}`);

-------------------------------------------------------------------------------------------


const N1 = Number(prompt("Digite um numero com 2 casas decimais:"));
const N2 = Number(prompt("Digite um numero com 2 casas decimais:"));

console.log(N1 + N2);


//ouuuuuuuuuuuuuu

const N1 = Number(prompt("Digite um numero com 2 casas decimais:"));
const N2 = Number(prompt("Digite um numero com 2 casas decimais:"));

const soma = N1 + N2

console.log("o resultado da soma é:", soma);

--------------------------------------------------------------------------------------------





