const express = require('express');
// khai bao mongo
const mongoose = require('mongoose');
//KHai bao modle
const reviewModel = require('./app/model/reviewModel');
const { viewsRouter } = require('./app/routers/reviewRourter');


const app = express();
const port = 8000;
// ket noi mongo db
mongoose.connect('mongodb://127.0.0.1:27017/CRUD_Course',).then((value)=>{
    console.log("Success!");
}).catch((err) => {throw err})
   
app.use('/', viewsRouter)
app.listen(port, ()=>{
    console.log('project ExpressJS khai báo CRUD RestAPI Course sử dụng router-level middleware');
});