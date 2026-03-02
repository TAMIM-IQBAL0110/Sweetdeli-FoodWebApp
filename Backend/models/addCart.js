import mongoose from "mongoose";
const CartSchema = mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref: "User", required: true,},
    productName:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true,default:1,min:1}
},{timestamps:true})

export default mongoose.model("Cart",CartSchema)