import express from "express";
import { isAuthenicated } from "../middleware/auth";
import { createOrder } from "../controllers/order.controller";
const orderRouter = express.Router();

orderRouter.post('/create-order',isAuthenicated,createOrder)


export default orderRouter

