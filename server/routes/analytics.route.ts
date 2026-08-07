import express from 'express'
import { authorizeRoles, isAuthenicated } from '../middleware/auth';
import { getUserAnalytics } from '../controllers/analytics.controller';
const analyticsRouter = express.Router();

analyticsRouter.get('/get-users-analytics',isAuthenicated,authorizeRoles("admin"),getUserAnalytics)


export default analyticsRouter