import express from 'express'
import { activateUser, deleteUser, getAllUsers, getUserInfo, loginUser, logoutUser, registerationUser, socialAuth, updateAccessToken, updatePassword, updateProfilePicture, updateUserInfo, updateUserRole } from '../controllers/user.controller'
import { authorizeRoles, isAuthenicated } from '../middleware/auth';
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

userRouter.put('/update-user-avatar',isAuthenicated,updateProfilePicture)

userRouter.get('/get-users',isAuthenicated,authorizeRoles("admin"),getAllUsers)

userRouter.put('/update-user',isAuthenicated,authorizeRoles("admin"),updateUserRole)

userRouter.delete('/delete-user/:id',isAuthenicated,authorizeRoles("admin"),deleteUser)

export default userRouter;