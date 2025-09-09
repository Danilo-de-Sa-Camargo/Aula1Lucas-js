//Filter, Map, Find, Reduce

//Filter
//Exemplo: obter os números pares de um array
const numeros = [1, 2, 3, 4, 5, 6]

//Filter:
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares)

------------------- / / ---------------------

    // função de callback (sem usar a seta =>)
    function digaOla(nome) {
        console.log("Olá, " + nome);
    }

function executar(callback) {
    callback("Giovana");
}

executar(digaOla);

//outro exemplo:
const idades = [15, 20, 25, 12];
const maiores = idades.filter(function (idade) {
    return idade >= 18;
})
console.log(maiores)

// callback

const idades = [15, 20, 25, 12];
//const maiores = idades.filter (function(i) {return i >= 18;})
//const maiores = idades.filter ((i) => {return i >= 18})
const maiores = idades.filter(i => i >= 18)
console.log(maiores)

//callback
const produtos = [
    { id: 1, nome: "Camiseta", preco: 30, promocao: false }
{ id: 2, nome: "Caneca", preco: 15, promocao: true }
{ id: 3, nome: "Boné", preco: 25, promocao: true }
];
//filtrar apenas os produtos em promoção 
const emPromocao = produtos.filter(p => p.promocao === true);
console.log(emPromocao)

====================================================================================
//map
 const Nums = [1, 2, 3, 4];

 //map cria, novo array com o resultado da função aplicada a item
 const dobrados = Nums.Map (n => n *2);
 console.log(dobrados)

//outro exemplo
const alunos = [
{nome: "Ana", nota: 8},
{nome: "Bruna", nota: 6},
];

const nomes = alunos.Map(a => `${a.nome}`)
const comAprovacao = alunos.Map(a => ({... a, aprovado: a.nota }))

=====================================================================================================
// callback
const idades = [15, 20, 25, 12];
//const maiores = idades. filter(function(i) {return i >= 18;})
//const maiores = idades. filter((i) => {return i >= 18})
const maiores = idades. filter (i =› i >= 18)
console. log(maiores)

===========================================================================================
//find busca o primeiro elemento que satisfaz a condição e retorna esse elemento
const produtos = [
{id: 1, nome: "Camiseta"}, {id: 2, nome: "Caneca"},
const p = produtos. find(p => p.id === 2);
console. log(p)


==========================================================================================
//reduce reduz o array a um único valor(número, objeto, array...)
const nums = [10, 20, 5];
const soma = nums.reduce((acc, cur) => acc + cur, 0)
console.log(soma)


//outro exemplo
const itens = [
{nome:"Caneta", categoria: "papelaria", preço: 3),
{nome:"Caderno", categoria: "Papelaria" , preço: 15},
{ nome:"Maça", categoria: "Alimentos", preço: 2},
]
const totalPorCategoria = itens.reduce((acc, it) => {
      const cat = it.categoria;
     if (lacc[cat]) acc[cat] = 0;
    acc[cat] += it preco; 
    return acc;
}, {};
console.log(totalPorCategoria)

=========================================================================================================
const compras = [
    {nome: "Leite", preco; 5},
    {nome: "Pão", preco; 8},
    {nome: "Manteiga", preco; 12},
]
const valorTotal = Compras.reduce((acumulador, itemAtual) => {
return acumulador + itematual.preco

}, 0)




















