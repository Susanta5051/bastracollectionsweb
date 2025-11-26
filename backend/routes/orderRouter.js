import authUser from '../middleware/auth.js'
import adminAuth from '../middleware/adminAuth.js'
import express from 'express'

import { allOrders, userOrders , placeOrder ,placeOrderRazorPay, placeOrderStripe ,updateStatus } from '../controllers/orderControllers.js'

const orderRouter = express.Router();

orderRouter.post('/list' ,adminAuth ,allOrders);
orderRouter.post('/status' , adminAuth , updateStatus);

orderRouter.post('/place' ,authUser, placeOrder);
// orderRouter.post('/stripe' ,authUser, placeOrderStripe);
// orderRouter.post('/razor' ,authUser, placeOrderRazorPay);

orderRouter.post('/userorders',authUser, userOrders);

export default orderRouter;