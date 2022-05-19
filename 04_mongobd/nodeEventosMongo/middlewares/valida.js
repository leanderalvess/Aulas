//A idéia do middleware fará a intercepção das requisições, e baseado na resposta terá uma ação
module.exports = function(request, response, next){
    if(!request.session.usuarioSession){
        return response.redirect('/');
    }
    return next();
}