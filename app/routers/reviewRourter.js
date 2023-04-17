// khai bao thu vien express
const express = require('express');

// khai bao middlewares
const  {
    getAllReviewMiddlewares, getReviewMiddlewares, postReviewMiddlewares, putReviewMiddlewares, deleteReviewMiddlewares
} = require('../middlewares/reviewMiddleware');

// 
const viewsRouter = express.Router();

viewsRouter.get('/reviews',  (req, res)=>{
    res.json({
        message:'Get all reviews'
    })
});


viewsRouter.get('/reviews/:reviewId', getReviewMiddlewares,  (req, res)=>{
    let reviewId = req.params.reviewId;
    res.json({
        message:`Get reviews id ${reviewId}`
    })
});

viewsRouter.post('/reviews/:reviewId', postReviewMiddlewares,  (req, res)=>{
    let reviewId = req.params.reviewId;
    res.json({
        message:`post reviews id ${reviewId}`
    })
});

viewsRouter.put('/reviews/:reviewId', putReviewMiddlewares,  (req, res)=>{
    let reviewId = req.params.reviewId;
    res.json({
        message:`put reviews id ${reviewId}`
    })
});

viewsRouter.delete('/reviews/:reviewId', deleteReviewMiddlewares,  (req, res)=>{
    let reviewId = req.params.reviewId;
    res.json({
        message:`delete reviews id ${reviewId}`
    })
});
module.exports = { viewsRouter }