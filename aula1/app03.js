var colecao = require("./colecoes");

//Obtendo um subconjunto da lista de nomes, com base em um critério.

var filtroNomes = colecao.nomes.filter(n => n.includes('le'));

for (const nome of filtroNomes) {
    console.log(`Nome: ${nome}`);
    console.log('*********************');
}