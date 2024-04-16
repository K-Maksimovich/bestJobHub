// routes.js
import express from 'express'
import { helloController, register, login, addPhoto, getUser } from './controllers.js';

const router = express.Router();
router.get('/user/:id', getUser);
router.post('/reg', register);
router.post('/login', login);
router.post('/photo/:id', addPhoto);

export default router;