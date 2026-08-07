import express from 'express'
import { authorizeRoles, isAuthenicated } from '../middleware/auth';
import { createLayout } from '../controllers/layout.controller';
const layoutRouter = express.Router();

layoutRouter.post('/create-layout',isAuthenicated,authorizeRoles("admin"),createLayout)

export default layoutRouter;