import express from 'express'
import { authorizeRoles, isAuthenicated } from '../middleware/auth';
import { getCoursesAnalytics, getOrderAnalytics, getUserAnalytics } from '../controllers/analytics.controller';
const analyticsRouter = express.Router();

analyticsRouter.get('/get-users-analytics',isAuthenicated,authorizeRoles("admin"),getUserAnalytics)

analyticsRouter.get('/get-orders-analytics',isAuthenicated,authorizeRoles("admin"),getOrderAnalytics)

analyticsRouter.get('/get-courses-analytics',isAuthenicated,authorizeRoles("admin"),getCoursesAnalytics)


export default analyticsRouter