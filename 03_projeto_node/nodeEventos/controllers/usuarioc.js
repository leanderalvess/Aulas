module.exports = function(app){
    var UsuarioController = {
        usuario: function(request, response){
            var params = { usuarioSession: request.session.usuarioSession } //Essa variável é para pegar as infos do user
            response.render('usuario/inicio', params);
        },
        cadastroUsuario: function(request,response){
            var params = { usuarioSession: request.session.usuarioSession }
            response.render('usuario/cadastro', params);
        }
    };
    //dunno nope
    return UsuarioController;
}