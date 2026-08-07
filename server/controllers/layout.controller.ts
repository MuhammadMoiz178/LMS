import { Request,Response,NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { catchAsyncError } from "../middleware/catchAsyncError";
import layoutModel from "../models/layout.model";
import cloudinary from 'cloudinary'


// create layout
export const createLayout = catchAsyncError(async (req:Request,res:Response,next:NextFunction) => {
     try {
        const { type } = req.body
        const isTypeExists = await layoutModel.findOne({ type })

        if (isTypeExists) {
            return next(new ErrorHandler(`${type} already exists`, 500))
        }

        if (type === "Banner") {
            const { image, title, subTitle } = req.body
            const myCloud = await cloudinary.v2.uploader.upload(image, {
                folder: "layout"
            })

            const banner: any = {
                type: "Banner",
                banner: {
                    image: {
                        public_id: myCloud.public_id,
                        url: myCloud.secure_url
                    },
                    title,
                    subTitle
                }
            }
            await layoutModel.create(banner)
        }

        if (type === "FAQ") {
            const { faq } = req.body
            const faqItems = await Promise.all(
                faq.map((item: any) => {
                    return {
                        question: item.question,
                        answer: item.answer
                    }
                })
            )
            await layoutModel.create({ type: "FAQ", faq: faqItems })
        }

        if (type === "Categories") {
            const { categories } = req.body
            const categoriesItem = await Promise.all(
                categories.map((item: any) => {
                    return {
                        title: item.title,
                    }
                })
            )
            await layoutModel.create(
                {
                    type: "Categories",
                    categories: categoriesItem
                })
        }

        res.status(201).json({
            success: true,
            message: "Layout created successfully"
        })
    } catch (error:any) {
        return next(new ErrorHandler(error.message,500))
    }
})