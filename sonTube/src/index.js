import mongoose, { connect } from "mongoose"
import { DB_NAME } from "./constaint.js";
import {connectDB} from "./db/indexy.js"
import dotenv from "dotenv"
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is Running  at port ${process.env.PORT}`);
    
  })
})
.catch((err)=>{
  console.log("Mongo db connection failed !!!",err);
})





/*
import express from "express"
const app= express();
;(async()=>{
    try{
      await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      app.on("error",(err)=>{
        console.log("ERR",err);
        throw err
      })
      app.listen(process.env.PORT,()=>{
        console.log(`App Is  Listerning on ${process.env.PORT}`);
        
      })
    }
    catch(error){
         console.log("ERR0OR",error)
        throw error
    }
})()*/