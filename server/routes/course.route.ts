import express from 'express'
import { editCourse, uploadCourse } from '../controllers/course.controller';
import { authorizeRoles, isAuthenicated } from '../middleware/auth';
const courseRouter = express.Router();

courseRouter.post('/create-course',isAuthenicated,authorizeRoles("admin"),uploadCourse);
courseRouter.put('/edit-course/:id',isAuthenicated,authorizeRoles("admin"),editCourse);

export default courseRouter