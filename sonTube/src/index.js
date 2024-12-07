import mongoose, { connect } from "mongoose"
import { DB_NAME } from "./constaint.js";
import {connectDB} from "./db/indexy.js"
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})


connectDB()





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