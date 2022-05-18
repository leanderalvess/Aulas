module.exports = function(app){
    //vamos criar uma variável para referênciar o controller
    var homec = app.controllers.homec;

    //Now pegamos o objeto app, e interceptamos as requisições validando-as com a req get.
    //Inicialmente é declarado só /
    app.get('/',homec.index);
    app.get('/abc',homec.index);

};