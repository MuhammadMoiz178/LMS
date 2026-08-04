import express from 'express'
import { addAnswer, addQuestion, addReplyToReview, addReview, editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from '../controllers/course.controller';
import { authorizeRoles, isAuthenicated } from '../middleware/auth';
const courseRouter = express.Router();

courseRouter.post('/create-course',isAuthenicated,authorizeRoles("admin"),uploadCourse);

courseRouter.put('/edit-course/:id',isAuthenicated,authorizeRoles("admin"),editCourse);

courseRouter.get('/get-course/:id',getSingleCourse);

courseRouter.get('/get-courses',getAllCourses);

courseRouter.get('/get-course-content/:id',isAuthenicated,getCourseByUser);

courseRouter.put('/add-question',isAuthenicated,addQuestion);

courseRouter.put('/add-answer',isAuthenicated,addAnswer);

courseRouter.put('/add-review/:id',isAuthenicated,addReview);

courseRouter.put('/add-reply',isAuthenicated,authorizeRoles("admin"),addReplyToReview);


export default courseRouter