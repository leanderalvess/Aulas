module.exports = function(app){
    var EventosController = {
        inicio: function(request, response){
            var params = { usuarioSession: request.session.usuarioSession } //Essa variável é para pegar as infos do user
            response.render('eventos/inicio', params);
        },
        cadastroEvento: function(request,response){
            var params = { usuarioSession: request.session.usuarioSession }
            response.render('eventos/cadastro', params);
        }
    };
    //dunno nope
    return EventosController;
}