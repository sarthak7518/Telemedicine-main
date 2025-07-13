import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'


// App Config
const app=express();
const port=process.env.PORT || 4000;

// Middleware
app.use(express.json())
app.use(cors())
connectDB()
connectCloudinary()

// API endpoints

app.use('/api/admin',adminRouter)

app.get('/',(req,res)=>{
    res.send('api working')
})

app.listen(port,()=>console.log(`Server is running on the port ${port}`));