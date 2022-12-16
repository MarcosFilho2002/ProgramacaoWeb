const exphbs = require('express-handlebars');
const express = require('express')

const app = express()

const conn = require('./db/conn')

const UserController = require('./controllers/UserController')
const User = require('./models/User')

const Post = require('./models/Post')

const serverSession = require('express-session')

const Image = require('./models/Image');
const fs = require('fs');
const multer = require('multer');


var usuarioAdmin;

app.use('/public', express.static(__dirname + '/public'))
app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: false}))

app.use(serverSession({
  secret: '4004-CrM7-Whe2Ko',
  resave: true,
  saveUninitialized: true
}));


app.get('/', async(req, res) => {
  var postsPegos = await Post.getPost();
  console.log(postsPegos);
  
  res.render('index',{postsPegos});
})

//Testar validação
app.get('/oi', valida,(req, res) => {
  res.end("oi");
})

async function valida (req, res, next) {
  var postsPegos = await Post.getPost();
  if(!req.session.usuario) {
      console.log("Autenticação: Acesso negado, não existe o token!")
      return res.render('index',{postsPegos});
  }
    console.log("Autenticação: Acesso permitido,existe o token!")
    return next();
};

app.post('/login',async function(req,res){
  const email = req.body.email
  const senha = req.body.senha
  
  let verf = 0;

  const user = await User.logar(email,senha)
  console.log(user)

  var postsPegos = await Post.getPost();

  if(user == null){
    
  }else{
    req.session.usuario = user;
    usuarioAdmin = user.admin;
    console.log(usuarioAdmin)
    if(usuarioAdmin == 'true'){
      verf = 1;
    }
  }
  if(verf == 1){
    res.render('index',{
      postsPegos : postsPegos, 
      layout:'admin'
    });
  }else{
    res.render('index',{
      postsPegos : postsPegos, 
      layout:'main'
    });
  }
  
})

app.post('/register',async function(req,res){
  const email = req.body.emailRegistro
  const senha = req.body.senhaRegistro
  const admin = req.body.adminRegistro

  const user = new User(email,senha,admin)
        
  user.save()

  var postsPegos = await Post.getPost();
  console.log(postsPegos);
  res.render('index',{postsPegos});
})

//***************************
app.post('/postar',valida,async function(req,res){
  const titulo = req.body.titulo
  const conteudo = req.body.conteudo
  const data = req.body.data

  console.log("Titulo: "+titulo)
  console.log("Conteudo: "+conteudo)
  console.log("Data: "+data)

  const post = new Post(titulo,conteudo,data)
  post.save()
  
  var postsPegos = await Post.getPost();
  console.log(postsPegos);
  
  
  postsPegos = await Post.getPost();
  res.render('index',{
    postsPegos : postsPegos, 
    layout:'admin'
  });
  
})


//***************************

app.get('/busca', async(req,res) =>{
  const busca = req.query.pesquisa
  console.log("****************"+busca)

  var postsPegos = await Post.getPost();
  var post = await Post.buscarPost(busca);
  console.log(post);
  if(usuarioAdmin == 'true'){
    res.render('index',{
      postsPegos : postsPegos,
      post:post,
      layout: 'admin'
    });
  }else{
    res.render('index',{
      postsPegos : postsPegos,
      post:post
    });
  }
  
})







//********UPLOAD*************

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

app.post('/upload', upload.single('image'),valida, (req, res) => {
  const image = req.file;
  const nome = image.originalname
  const buffer = image.buffer
  const tipo = image.mimetype
  const imagem = new Image(nome,buffer,tipo)
  imagem.save();
  console.log(imagem)
  res.redirect('/') 
})

//***********************

app.listen(3000, () => {
  console.log('Server online')
})