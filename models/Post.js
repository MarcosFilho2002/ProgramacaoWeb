class Posts{
    constructor(titulo,conteudo,data){
        this.titulo = titulo
        this.conteudo = conteudo
        this.data = data
    }
    save(){

        const post = conn.db().collection('posts').insertOne({
            titulo : this.titulo,
            conteudo: this.conteudo,
            data: this.data
        })
        console.log("Post salvo")
        return post;

    }
    static getPost(){
        const posts = conn.db().collection('posts').find().toArray()
        console.log('Posts listados')
        return posts;
    }
}
module.exports = Posts    