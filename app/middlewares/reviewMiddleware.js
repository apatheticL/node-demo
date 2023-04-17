const  getAllReviewMiddlewares =  
(req, res, next)=>{
    console.log('get all course');
    next();
}
const  getReviewMiddlewares =  
(req, res, next)=>{
    console.log('get a course');
    next();
}
const  postReviewMiddlewares =  
(req, res, next)=>{
    console.log('post a course');
    next();
}
const putReviewMiddlewares =  
(req, res, next)=>{
    console.log('put a course');
    next();
}
const deleteReviewMiddlewares =  
(req, res, next)=>{
    console.log('delete a course');
    next();
}
module.exports = {
    getAllReviewMiddlewares, getReviewMiddlewares, postReviewMiddlewares, putReviewMiddlewares, deleteReviewMiddlewares
}
