const express = require('express');
const userRouter = require('./routers/UserRouter');
const cityRouter = require('./routers/CityRouter');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Users', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(cityRouter);
app.listen(3000,function(){
    console.log('App listening on port 3000!');
});

