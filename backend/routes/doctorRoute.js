import express from 'express'
import { doctorList } from '../controllers/doctorController.js'

console.log("Doctor Router Loaded")
const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)

export default doctorRouter