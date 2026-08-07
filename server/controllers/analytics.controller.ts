import { Request,Response,NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { catchAsyncError } from "../middleware/catchAsyncError";
import { generateLast12MonthsData } from "../utils/analytics.generator";
import userModel from "../models/user.model";

// get user analytics - only for admin
export const getUserAnalytics = catchAsyncError(async (req:Request,res:Response,next:NextFunction) => {
    try {
        const user = await generateLast12MonthsData(userModel);

        res.status(200).json({
            success:true,
            user,
        })
    } catch (error:any) {
        return next(new ErrorHandler(error.message,500))
    }
})