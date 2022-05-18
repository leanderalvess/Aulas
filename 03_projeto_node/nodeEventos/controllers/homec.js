module.exports = function(app){ //ao declarar app, ele faz a conexão com o app.js express
    //Criamos o módulo e exportamos ele usando a aplicação 'app' como ref
    //Criamos um objeto no qual podemos ter 'N' actions no obj, que será o 'HomeController'
    //Criamos as actions dentro do objeto pensando nas possíveis entradas e saídas que teremos de respostas das solicitações
    var HomeController = {
        // actions declarations
        index: function(request, response){
            //quando a rota pegar a requisição de get do browser na rota '/', iremos carregar a action index que por sua vez responderá e renderizará a view 'home(pasta)/inicio(arquivo ejs)'
            response.render('home/inicio');
        }
    };

    //por fim, depois de declarar o objeto, iremos 'retornar' e disponibilizar para a exportação o objeto completo
    return HomeController;
};