import mongoose from "mongoose";
const CartSchema = mongoose.Schema({
    productName:{type:String,required:true},
    price:{type:Number,require:true},
    quantity:{type:Number,required:true,default:1}
},{timestamps:true})

export default mongoose.model("Cart",CartSchema)