import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import conncetDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

//app config
const app = express();
const port = process.env.PORT || 4000
conncetDB();
connectCloudinary();


//middleware
app.use(express.json());
app.use(cors())

//api endpoints

app.get("/", (req, res) => {
    res.send("API Working Great Vikash Babu")
});

app.listen(port, () =>{
    console.log(`Server is listen on port ${port}`)
})