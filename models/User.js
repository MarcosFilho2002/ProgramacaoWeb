const conn = require('../db/conn')

class Users{
    constructor(email,senha,admin){
        this.email = email
        this.senha = senha
        this.admin = admin
    }


    save(){

        const user = conn.db().collection('users').insertOne({
            email : this.email,
            senha: this.senha,
            admin: this.admin
        })
        console.log("Usuário salvo")
        return user;

    }

    static getUsers(){
        const users = conn.db().collection('users').find().toArray()
        console.log('Usuários listados')
        return users;
    }

    static logar(email,senha){

        const user = conn.db().collection('users').findOne(
            {
                email: email,
                senha: senha
            }         
        )
        console.log('Usuário encontrado!')
        return user;  
    }
    

}

module.exports = Users