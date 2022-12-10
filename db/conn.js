const { MongoClient } = require('mongodb')

const uri = 'mongodb+srv://admin:marcos123@cluster0.nh5dmuq.mongodb.net/bd_web'
//const uri = "mongodb://localhost:27017/testemongodb2"

const client = new MongoClient(uri)

async function run(){
    try{
        await client.connect()
        console.log('Conectando ao MongoDB!')
    }catch(err){
        console.log(err)
    }
}

run()

module.exports = client


/*
const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("")
    .then(conn => global.conn = conn.db("db_web"))
    .catch(err => console.log(err))


function findAll() {
    return global.conn.collection("users").find().toArray();
}

module.exports = { findAll }
*/