module.exports = function(app){ //ao declarar app, ele faz a conexão com o app.js express
    //Criamos o módulo e exportamos ele usando a aplicação 'app' como ref
    //Criamos um objeto no qual podemos ter 'N' actions no obj, que será o 'HomeController'
    //Criamos as actions dentro do objeto pensando nas possíveis entradas e saídas que teremos de respostas das solicitações
    var HomeController = {
        // actions declarations
        index: function(request, response){
            //quando a rota pegar a requisição de get do browser na rota '/', iremos carregar a action index que por sua vez responderá e renderizará a view 'home(pasta)/inicio(arquivo ejs)'
            response.render('home/login'); //o render renderiza a tela baseado no caminho e arquivo.ejs
        },
        login: function(request,response){
            //Obter as infos dos campos de entrada, usando request para pegar os dados do bodyParser

            var nome = request.body.usuario.nome; //pega separado
            var senha = request.body.usuario.senha;

            //simulação de login
            if(nome == 'admin' & senha == 'admin'){
                //É armazenado as infos do user
                //request.body.usuario; pega direto todas as infos, diferente de lá em cima
                //request.session.usuarioSession; cria uma sessão 'usuarioSession' e armazena um valor lá
                var nome = request.body.usuario.nome; //pega separado
                request.session.usuarioSession = request.body.usuario;
                response.redirect('inicio');
            }else{
                response.redirect('/'); //É redirecionado para uma rota, e carrega uma action que tiver lá
            }
        },
        logout: function(request,response){
            request.session.destroy();
            response.redirect('/');
        }
    };
    //por fim, depois de declarar o objeto, iremos 'retornar' e disponibilizar para a exportação o objeto completo
    return HomeController;
};