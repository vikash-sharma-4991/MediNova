import mongoose from 'mongoose';


const conncetDB = async() => {
    await mongoose.connect(`${process.env.MONGODB_URL}/medinova`)
}

conncetDB().then(() => {
    console.log("MongoDB Connection Successful");
}).catch((err) => {
    console.log(err)
})

export default conncetDB