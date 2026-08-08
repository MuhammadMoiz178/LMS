import express from 'express'
import { authorizeRoles, isAuthenicated } from '../middleware/auth';
import { createLayout, editLayout } from '../controllers/layout.controller';
const layoutRouter = express.Router();

layoutRouter.post('/create-layout',isAuthenicated,authorizeRoles("admin"),createLayout)

layoutRouter.put('/edit-layout',isAuthenicated,authorizeRoles("admin"),editLayout)

export default layoutRouter;