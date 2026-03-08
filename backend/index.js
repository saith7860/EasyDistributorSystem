import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'
const app=express();
app.use(cors());
const PORT=process.env.PORT;
app.listen(PORT,()=>{
 console.log('app is listening on port ',PORT);
 
})