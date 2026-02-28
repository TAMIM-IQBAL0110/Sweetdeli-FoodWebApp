import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from './routes/authRoute.js'
import dashboardRoute from './routes/dashboardRoute.js'
import cartRoute from './routes/cartRoute.js'
import {fileURLToPath} from 'url'
import path from 'path'
import connectDB from './config/db.js'

const app = express()

// Middleware that parses incoming JSON requests
app.use(express.json());

const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173,http://localhost:3000").split(',').map(url => url.trim());

// middleware to handle cors
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true);
        
        const isAllowed = allowedOrigins.some(allowed => 
            origin === allowed || origin.includes('netlify.app') || origin.includes('localhost')
        );

        if (isAllowed){
            callback(null, true);
        } 
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"], // Fixed typo here
    credentials: true
}));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'Server is running',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

// connect to MongoDB
connectDB();

app.use("/api/v1/auth",authRoute);
app.use("/api/v1/dashboard",dashboardRoute);
app.use("/api/v1/cart",cartRoute)

// 404 handling middleware
app.use((err,req,res,next) =>{
    res.status(500).json({
        message:'Internal Server Error',
        error: process.env.NODE_ENV === 'production' ? 'Server error' : err.message
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});