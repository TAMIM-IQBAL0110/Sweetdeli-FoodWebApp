import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

let isConnected = false;

const connectDB = async()=>{
    if(isConnected){
        console.log("MongoDB already connected");
        return;
    }

    try{
        const mongoUrl = process.env.MONGO_URL?.trim();
        if(!mongoUrl){
            throw new Error("MONGO_URL environment variable is not set");
        }
        console.log("🔄 Attempting MongoDB connection...");
        const connection = await mongoose.connect(mongoUrl, {
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            serverSelectionTimeoutMS: 5000,
        })
        isConnected = true;
        console.log("✅ MongoDB connected successfully")
        return connection;
    }catch(error){
        console.error("❌ MongoDB connection failed:", error.message)
        // Retry connection after 5 seconds
        console.log("🔄 Retrying MongoDB connection in 5 seconds...");
        setTimeout(connectDB, 5000);
    }
};

// Handling unexpected disconnection
mongoose.connection.on('disconnected', () => {
    console.log('⚠️ MongoDB disconnected!');
    isConnected = false;
});

mongoose.connection.on('error', (err) => {
    console.error('⚠️ MongoDB connection error:', err.message);
});

export default connectDB