import {connectDB} from "./Db/db.js";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from "./Routes/userRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

//middleware
app.use(express.json())
app.use(cors())
connectDB()
// http://localhost:5000/api/user/signup
// http://localhost:5000/api/user/getusers
// http://localhost:5000/api/user/updatepassword/:id

app.use('/api/users',userRoute)
dotenv.config();

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
