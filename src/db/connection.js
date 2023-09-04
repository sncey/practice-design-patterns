const mongoose = require ('mongoose')

class Database{
    static #instance 
    constructor(){
        mongoose.connect(uri,"mongodb://127.0.0.1:27017", options,{useNewUrlParser:true});
       
        mongoose.connection.once("open",()=>{
            console.log("Database connected:")
        })
        mongoose.connection.on("error",(err)=>{
            console.error("connection error:",err)
            
        }
        )
    }

    static getInstance(){
        
        if(this.#instance){
            return this.#instance;
        }
        this.#instance = new Database();
        return this.#instance;
    }
        
}

module.exports = Database