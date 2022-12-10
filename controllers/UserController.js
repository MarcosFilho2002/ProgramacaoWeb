const User = require('../models/User')

module.export = class UserController{
    static sobre(req,res){
       console.log('sobreeee')
    }

    static createUser(req,res){
        res.render('index')
    }

    static createUserPost(req,res){
        const email = req.body.email
        const senha = req.body.price
        const admin = req.body.admin

        const user = new User(email,senha,admin)
        
        user.save()

        res.redirect('/index')
    }
    
}
