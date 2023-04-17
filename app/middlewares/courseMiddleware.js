const  getAllCourseMiddlewares =  
(req, res, next)=>{
    console.log('get all course');
    next();
}
const  getCourseMiddlewares =  
(req, res, next)=>{
    console.log('get a course');
    next();
}
const  postCourseMiddlewares =  
(req, res, next)=>{
    console.log('post a course');
    next();
}
const putCourseMiddlewares =  
(req, res, next)=>{
    console.log('put a course');
    next();
}
const deleteCourseMiddlewares =  
(req, res, next)=>{
    console.log('delete a course');
    next();
}
module.exports = {
    getAllCourseMiddlewares, getCourseMiddlewares, postCourseMiddlewares, putCourseMiddlewares, deleteCourseMiddlewares
}
