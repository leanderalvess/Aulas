var express = require('express');
// Não precisa ser o mesmo nome, apenas aplicamos a boa prática de não ter o require com o nome da variável da aplicação. Dessa forma utilizaremos a instancia do express para criar a aplicação

//app será a instancia e aplicação de express
app = express();
//Essa variável executará o que significa o próprio módulo do express, e então configuremos a nossa aplicação

app.set('views',__dirname+'/views'); //views é uma constante do express, não pode ser modificada.
app.set('view engine', 'ejs');//constante do express, qual é o mecanismo de tipo de view utilizaremos no app
app.use(express.static(__dirname+'/public'));//Pasta de arquivos estáticos, imagens, css e etc
app.listen(3001, function(){ //utilizaremos o listen para fazer a aplicação/server rodar
  console.log('A aplicacao está rodando bixo :0')
});
app.set('models', __dirname+'/models');
app.set('controllers', __dirname+'/controllers');
