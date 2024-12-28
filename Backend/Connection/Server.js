const express=require('express')
const app=express();
const connectDb=require('./config/db')
connectDb()
app.listen(4000,()=>{
    console.log("Server is running... ")
})