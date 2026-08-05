import express from 'express'
import { authorizeRoles, isAuthenicated } from '../middleware/auth';
import { getNotifications, updateNotification } from '../controllers/notification.controller';

const notificationRouter = express.Router();

notificationRouter.get('/get-all-notifications',isAuthenicated,authorizeRoles("admin"),getNotifications);

notificationRouter.put('/update-notifications/:id',isAuthenicated,authorizeRoles("admin"),updateNotification);


export default notificationRouter