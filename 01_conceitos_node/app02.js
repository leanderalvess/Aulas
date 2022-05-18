var funcoes = require('./funcoes');

// var soma = funcoes.somar(20, 4);

// console.log('A soma deu '+soma);

// var multiplica = funcoes.multiplicar(20, 4);
// console.log('A soma deu '+multiplica);

var listaAlunos = funcoes.alunos;
console.log('Quantidade de alunos'+listaAlunos.lenght);

for (let index = 0; index < listaAlunos.length; index++) {
    // console.log('Posição: '+index);
    // console.log(listaAlunos[index]);
    // console.log('---------------------');

    let aluno = listaAlunos[index];
    console.log(`Nome: ${listaAlunos[index].nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log('---------------------');
}

//ArrowFunction é uma função usada para callback
funcoes.alunos.map(alunos => console.log(`Nome: ${alunos.nome} Idade: ${alunos.idade}`));

