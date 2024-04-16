// index.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import  router  from './authRouter.js';

const app = express();

// Middleware для разрешения CORS
app.use(cors());

// Парсинг JSON тела запроса
app.use(express.json());

// Использование маршрутов
app.use("/auth", router);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://iwvestor:qwerty123@cluster0.iurd8wj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        app.listen(8800, () => console.log("Server is running on port 8800"));
    } catch (error) {
        console.log(error)
    }
}

start();
