import express from 'express'
import { authorizeRoles, isAuthenicated } from '../middleware/auth';
import { getNotifications } from '../controllers/notification.controller';

const notificationRouter = express.Router();

notificationRouter.get('/get-all-notifications',isAuthenicated,authorizeRoles("admin"),getNotifications);


export default notificationRouter