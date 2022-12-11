const exphbs = require('express-handlebars');
const express = require('express')

const app = express()

const conn = require('./db/conn')

const UserController = require('./controllers/UserController')
const User = require('./models/User')

app.use('/public', express.static(__dirname + '/public'))
app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
  res.render('index');
})
/*
app.post('/register'), function(req,res){
  const email = req.body.emailRegistrar
  const senha = req.body.senhaRegistrar
  const admin = req.body.admin

  const user = new User(email,senha,admin)
  console.log(admin);      

  user.save()

  res.redirect('/')
}
*/
app.post('/login',async function(req,res){
  const email = req.body.email
  const senha = req.body.senha
  
  const user = await User.logar(email,senha)
  console.log(user)
  if(user == null){
    
  }
  res.render('index');
})

app.post('/register',function(req,res){
  const email = req.body.emailRegistro
  const senha = req.body.senhaRegistro
  const admin = req.body.adminRegistro

  const user = new User(email,senha,admin)
        
  user.save()

  res.redirect('/')
})
//*********************

app.listen(3000, () => {
  console.log('Server online')
})