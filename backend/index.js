import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'
const app=express();
app.use(cors());
const PORT=process.env.PORT||3000;
app.get("/",()=>{
    console.log('Root is working');
    
})


app.listen(PORT,()=>{
 console.log('app is listening on port',PORT);
 
})