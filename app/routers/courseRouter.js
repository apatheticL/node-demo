// khai bao thu vien express
const express = require('express');

// khai bao middlewares
const {
    getAllCourseMiddlewares, getCourseMiddlewares, postCourseMiddlewares, putCourseMiddlewares, deleteCourseMiddlewares
} = require('../middlewares/courseMiddleware');

// 
const courseRouter = express.Router();

courseRouter.get('/courses',  (req, res)=>{
    res.json({
        message:'Get all courses'
    })
});

courseRouter.get('/course/:courseId', getCourseMiddlewares,  (req, res)=>{
    let courseId = req.params.courseId;
    res.json({
        message:`Get course id ${courseId}`
    })
});

courseRouter.post('/course/:courseId', postCourseMiddlewares,  (req, res)=>{
    let courseId = req.params.courseId;
    res.json({
        message:`post course id ${courseId}`
    })
});

courseRouter.put('/course/:courseId', putCourseMiddlewares,  (req, res)=>{
    let courseId = req.params.courseId;
    res.json({
        message:`put course id ${courseId}`
    })
});

courseRouter.delete('/course/:courseId', deleteCourseMiddlewares,  (req, res)=>{
    let courseId = req.params.courseId;
    res.json({
        message:`delete course id ${courseId}`
    })
});

module.exports = { courseRouter }