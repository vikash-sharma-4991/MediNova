import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import conncetDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';

//app config
const app = express();
const port = process.env.PORT || 4000
conncetDB();
connectCloudinary();


//middleware
app.use(express.json());
app.use(cors())

//api endpoints

app.use("/api/admin", adminRouter)
//localhost:4000/api/admin/add-doctor
app.use("/api/doctor",doctorRouter)

app.get("/", (req, res) => {
    res.send("API Working Great Vikash Babu")
});

app.listen(port, () =>{
    console.log(`Server is listen on port ${port}`)
})