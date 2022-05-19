module.exports = function(app){
    //vamos criar uma variável para referênciar o controller
    var valida = require('./../middlewares/valida');
    var homec = app.controllers.homec;
    var eventoc = app.controllers.eventoc;
    var usuarioc = app.controllers.usuarioc;

    //Now pegamos o objeto app, e interceptamos as requisições validando-as com a req get.
    //Inicialmente é declarado só /
    app.get('/',homec.index);
    app.post('/login',homec.login);
    app.get('/logout',homec.logout);

    app.get('/inicio', valida, eventoc.inicio); //valida vai validar se pode ir pra inicio ou não, anter de ir
    app.get('/cadastroEvento',valida, eventoc.cadastroEvento);
    app.get('/cadastrarEvento',valida, eventoc.cadastrarEvento);

    app.get('/usuario',valida, usuarioc.usuario);
    app.get('/cadastroUsuario',valida, usuarioc.cadastroUsuario);
    app.get('/cadastrarUsuario',valida, usuarioc.cadastrarUsuario);
    
};