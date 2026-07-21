import express from 'express'
import { activateUser, getUserInfo, loginUser, logoutUser, registerationUser, updateAccessToken } from '../controllers/user.controller'
import { isAuthenicated } from '../middleware/auth';
const userRouter = express.Router();

userRouter.post('/registration',registerationUser)

userRouter.post('/activate-user',activateUser)

userRouter.post('/login',loginUser)

userRouter.get('/logout',isAuthenicated,logoutUser)

userRouter.get('/refresh',updateAccessToken)

userRouter.get('/me',isAuthenicated,getUserInfo)

export default userRouter;