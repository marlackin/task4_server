import express from 'express';
import mongoose from 'mongoose';
import {registerValidation,loginVadidation} from './validations/auth.js'
import cors from 'cors'

import checkAuth from './utils/checkAuth.js'

import * as UserController from './controllers/UserController.js'
process.env.MONGODB_URI='mongodb+srv://admin:admin@cluster0.d2py2e4.mongodb.net/task4?retryWrites=true&w=majority'
// process.env.PORT = 5000

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('DB OK'))
.catch((err)=>console.log('DB ERROR',err))

const app = express();
app.use(cors())

app.use(express.json())




// app.get('/',checkAuth,UserController.getMe)

app.post('/login',loginVadidation,UserController.login)
app.post('/register',registerValidation,UserController.register)
app.get('/',checkAuth,UserController.getAllUsers)
app.delete('/deleteUser',checkAuth,UserController.deleteUser)
app.put('/block',checkAuth,UserController.blockUnblock)
app.get('/accessResource',UserController.accessResource)

app.listen(process.env.PORT || 5000,(err) =>{
    if (err) {
        console.error(err);
    }
    console.log('server listening on port',5000)
})