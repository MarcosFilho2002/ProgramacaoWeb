const exphbs = require('express-handlebars');
// Requisita o módulo Express instalado para que possa ser utilizado na aplicação
const express = require('express')

// Cria uma instância da aplicação/Express
const app = express()
app.use('/public', express.static(__dirname + '/public'))

// define a extensão e a instância do handlebars com o modelo que será interpretado o código
app.engine('hbs', exphbs.engine({extname: '.hbs'}));
// define qual o template a ser utilizado
app.set('view engine', 'hbs');

// Registra uma rota get(sinalizando leitura) apontando para a raiz '/'. Exemplo, exemplo.com/
// req: Request - Em resumo, corresponde as entradas, tudo aquilo que é enviado para o servidor 
// res: Response - Corresponde as saídas, tudo aquilo que é desejado enviar para o exterior
app.get('/', (req, res) => {
  // Envia uma string de resposta para a requisição realizada
  //res.send('Olá mundo. Ir para Sobre')
  // envia o arquivo da página principal
  //res.sendFile(__dirname + '/views/index.html')
  res.render('index');
})

//HAHAHAHAHAHA
app.get('/sobre', (req, res) => {
    res.render('sobre');
  })

// Inicializa o servidor observando a porta 3000
app.listen(3000, () => {
  console.log('Server online')
})