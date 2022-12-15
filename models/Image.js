const conn = require('../db/conn')

class Image{
    constructor(nome,buffer,tipo){  
        this.nome = nome;   
        this.buffer = buffer;
        this.tipo = tipo;
    }

    save(){
        const image = conn.db().collection('images').insertOne({
            name: this.nome,
            buffer: this.buffer,
            tipo: this.tipo
        })
        console.log("Imagem salva")
        return image;
    }

}

module.exports = Image