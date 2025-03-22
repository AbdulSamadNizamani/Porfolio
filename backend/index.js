import express from 'express';
import { config } from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './router/Contactdata.js';
config({
    path:'./.env.local'
})
const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods:["POST","GET","PUT","DELETE","PATCH"],
    credentials:true,
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use('/contactauth',router);

export default app;