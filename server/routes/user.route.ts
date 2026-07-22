import express from 'express'
import { activateUser, getUserInfo, loginUser, logoutUser, registerationUser, socialAuth, updateAccessToken, updatePassword, updateUserInfo } from '../controllers/user.controller'
import { isAuthenicated } from '../middleware/auth';
const userRouter = express.Router();

userRouter.post('/registration',registerationUser)

userRouter.post('/activate-user',activateUser)

userRouter.post('/login',loginUser)

userRouter.get('/logout',isAuthenicated,logoutUser)

userRouter.get('/refresh',updateAccessToken)

userRouter.get('/me',isAuthenicated,getUserInfo)

userRouter.post('/social-auth',socialAuth)

userRouter.put('/update-user-info',isAuthenicated,updateUserInfo)

userRouter.put('/update-password',isAuthenicated,updatePassword)

export default userRouter;