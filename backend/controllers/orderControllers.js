import orderModel from "../model/orderModel.js";
import userModel from "../model/userModel.js";

//place COD order
const placeOrder = async (req , res )=>{
    
    try{
        const { items ,amount , address } =req.body;
        const userId =req.user;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod : 'COD',
            payment : false ,
            date : Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId , {cartData :{}})

        res.json({success : true , message : 'Order Placed'})
    }catch(error){
        console.log(error.message)
        res.json({ success : false , message : error.message})
    }
    
}
//place Stripe order
const placeOrderStripe = async (req , res )=>{

}


//place RazorPay order
const placeOrderRazorPay = async (req , res )=>{

}

//see user orders
const userOrders = async (req, res )=>{
    try{
        const userId  = req.user;
        
        const orders =await orderModel.find({userId})
        if(orders){
            res.json({success : true ,orders})
        }else{
            res.json({success : false , message : 'order not found'})
        }
        
    }catch (error){
        console.log(error);
        res.json({success : false , message : error.message});
    }
}

const updateStatus = async (req , res)=>{
    try{
        const {orderId ,status }=req.body;

        await orderModel.findByIdAndUpdate(orderId,{status});
        res.json({success : true , message : 'Status updated'})

    }catch(error){
        console.log(error.message)
        res.json({success :false , message : error.message})
    }
}

const allOrders = async (req,res)=>{
    try{

        const orders = await orderModel.find({});
        console.log('api called')
        res.send({success : true , orders})

    }catch(error){
        console.log(error.message);
        res.json({success : false , message : error.message})
    }
}

export { placeOrder , placeOrderStripe , placeOrderRazorPay ,userOrders ,updateStatus ,allOrders} 