//Escreveremos funcoes e objetos a serem expostos e/ou exportados

function calcularSoma(x, y){
    return (x + y);
}
//evite criar mais variáveis, para não ocupar memória atoa.

var calculo = calcularSoma(1, 1);

console.log('Minha conta deu ' + calculo);
//console.log(`Minha soma deu ${valor1}+${valor2} deu: ${calculo}`);
//console.log(`Minha soma deu ${valor1}+${valor2} deu: ${calcularSoma(valor1,valor2)}`);

exports.somar = calcularSoma;

exports.multiplicar = function(x,y){
    return x * y;
};

exports.alunos={
    {
    nome: 'Andre',
    idade: 23
    }
    {
    nome: 'Camilo',
    idade: 25
    }
    {
    nome: 'Rennan',
    idade: 29
    }
                
};

//Arrow Function é uma funçã escrita de forma simplificada, com uso do simbolo de flecha =>
// a estrutura usada de arrow function costuma ser o retorno de callback de funções
// a palavra function pode ser retirada e as chaves também 
// Como a arrow funciotn espera um retorno, a palavra 'return' também pode ser returada

function verificaTamanho(x){
    return x.lenght;
}

exports.verificaTamanho = (x) => x.lenght;
exports.verificaTamanho = x => x.lenght;

// ver diferença entre Map, Filter ou Find.

exports.fn1 = () => console.log('oi');

exports.multiplasLinhas = function (texto) {
    let novo texto = texto + "!!";
    console.log(novoTexto);
    return novoTexto;
}

export.multiplasLinhas1 = (texto) => {
    let novo texto = texto + "!!";
    console.log(novoTexto);
    return novoTexto;
}