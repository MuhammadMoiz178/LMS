import notificationModel from "../models/notification.model";
import { Request,Response,NextFunction } from "express";
import { catchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import cron from 'node-cron'

// get all notifications - only for admin
export const getNotifications = catchAsyncError(async (req:Request,res:Response,next:NextFunction) => {
    try {
        const notifications = await notificationModel.find().sort({createdAt:-1})

        res.status(201).json({
            success:true,
            notifications
        })
    } catch (error:any) {
        return next(new ErrorHandler(error.message,500));
    }
})

// update notification status - only admin
export const updateNotification = catchAsyncError(async (req:Request,res:Response,next:NextFunction) => {
    try {
        const notification = await notificationModel.findById(req.params.id);
        
        if(!notification) {
            return next(new ErrorHandler("Notoification not found",404))
        } else {
            notification.status ?  notification.status = "read" : notification.status; 
        }

        await notification.save();

        const notifications = await notificationModel.find().sort({createdAt:-1})

        res.status(201).json({
            success:true,
            notifications
        })
    } catch (error:any) {
       return next(new ErrorHandler(error.message,500));
    }
})

// delete notification - only admin
cron.schedule("0 0 0 * * *",async () => {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    console.log(thirtyDaysAgo);

    await notificationModel.deleteMany({status:"read",createdAt:{$lt:thirtyDaysAgo}})

    console.log("deleted read notifications");
})