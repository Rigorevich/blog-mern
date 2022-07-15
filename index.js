import express from 'express';
import mongoose from 'mongoose';

import {registerValidation, loginValidator, postCreateValidation} from "./validations/validations.js";

import checkAuth from './utils/checkAuth.js'

import * as UserController from "./controlers/UserController.js";
import * as PostController from "./controlers/PostController.js";


mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.dsdyo.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/login', loginValidator, UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation, PostController.create);
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch('/posts/:id', checkAuth, PostController.update);





app.listen(4445, (err) => {
    if (err) console.log(err);
    console.log('Server has been started...');
});