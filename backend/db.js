const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017";

const coonectToMongo = () =>{
   // mongoose.connect(mongoUrl, ()=>{
     //   console.log('mongo db connected successfully..');
    //});

    try {
        //mongoose.set('strictQuery', false)
        mongoose.connect(mongoUrl) 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        //process.exit()
    }
}

module.exports = coonectToMongo;