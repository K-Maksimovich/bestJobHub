import User from './models/User.js';
import UserRole from './models/Role.js';
import jwt from "jsonwebtoken";
import secretKey from './config.js';
import { json } from 'express';

import TelegramBot from 'node-telegram-bot-api'




const generateAccessToken = (id,username) =>{
    const payload = {
        id,
        username
    }
    return jwt.sign(payload,secretKey, {expiresIn:'30d'})
}

export const helloController = (req, res) => {
    res.json({ message: "Hello, world!" });
};

export const register = async (req, res) => {
    try {
        const {username,password} = req.body;
        const candidate = await User.findOne({username})
        if(candidate){
            return res.status(400).json({msg:"пользователь уже зарегестрирован"})
        }
        const user = new User({username,password});
        user.save()
        return res.status(200).json({msg:"Пользователь успешно создан"})
    } catch (error) {
        console.log(error)
    }
};

export const login = async (req, res) => {
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({ msg: "пользователь не найден" })
        }
        const token = generateAccessToken(user._id,user.username);
        return res.json({token})
    } catch (error) {
        console.log(error)
    }
};

export const addPhoto = async (req, res) => {
    try {
        const {photo} = req.body;
        const userId = req.params.id;
        const user = await User.findByIdAndUpdate(userId,{photo})
        return res.status(200).json({msg:"фото успешно добавлено"})
    } catch (error) {
        console.log(error)
    }
};

export const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId)
        return res.json({user})
    } catch (error) {
        console.log(error)
    }
};