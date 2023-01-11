const express=require('express');
const mongoose=require('mongoose');
const comments=require('./routes/comments');
const users=require('./routes/users');
const auth=require('./routes/usersAuth');
mongoose.set('strictQuery', true);
const cors=require('cors');

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Commliy')
    .then(()=>console.log('Connected succesfully'))
    .catch(()=>console.log('Haha'))

app.use('/api/comments',comments);
app.use('/api/users',users);
app.use('/api/userAuth',auth);

let port=process.env.PORT||4000;

app.listen(port,()=>'hello you badass')