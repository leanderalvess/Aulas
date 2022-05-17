var http = require('http'); //módulo para criar aplicação que vai funcionar servidor web
var fs = require('fs'); //módulo de filesystem que permite ler e gravar arquivos
var url = require('url');

var server = http.createServer(function(request, response){
    //Vamos usar o request para pegar infos da URL
    var url_params = url.parse(request.url);
    //Vamos pegar o nome do caminho do arquivo, e salvar na variável caminho
    var caminho = url_params.pathname;

    //contante do nome -> __dirname (retorna o diretório de execucao do codigo)

    fs.readFile(__dirname+caminho, function(erro, conteudo){
        if(erro){
            //Nesse cenário, vamos tratar c um cabeçalho para exibir o erro 404, de ñ encontrado, como resposta de servidor
            //Importante, a escrita tem que ser exatamente como ficará abaixo, para que o server compreenda o cabeçalho.
            //StatusCodeServer, resposta de info(100-199), sucesso(200-299), redirecionamento(300-399), erroCliente(400-499), erroServidor(500-599); developer.mozzila.org/pt-BR/docs/Web/HTTP/Status
            response.writeHead(404,{
                "Content-Type":"text/html"
            });
            response.write('<h1>Página não encontrada<\h1>');
        }else{
            response.writeHead(200,{
                "Content-Type":"text/html"
            });
            response.write(conteudo);
        }
        response.end(); //Finaliza a tratativa da resposta, para não ter request infinita
    })
})

//Isso é localmente, para o server é diferente
server.listen(3000,function(){
    console.log('O meu servidor está no ar')
});
//Para porta aleatória 
const port = process.env.port || 4000

//semver.org (é uma semantica para versionamento para json package)
//numero sem caracter(versao): extamente a ultima versão
//~versao: aproximada
//>=versao: igual ou maior que 
//>versao: maior que
//<=versao: igual ou menor que
//<versao: menor que
//^versao: compatível

//Micro-FrontEnd = Microserviços {Seriam projetos menores que impactam menos o sistema} (ESTUDAR ISSO AQUI)
