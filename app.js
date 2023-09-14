import express from "express";
import mongoose from "mongoose";
import { config } from 'dotenv'
import cors from "cors"

config()

const app = express()

const PORT = process.env.PORT || "local"
const USER = process.env.USER_DB || "local"
const DATABASE = process.env.DATABASE || "local"
const PASSWORD = process.env.PASSWORD || "local"
const CLUSTER = process.env.CLUSTER || "local"

mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.${DATABASE}.mongodb.net/`)
app.listen(PORT, ()=>{
    console.log(`Aplicação online na porta: ${PORT}`)
})

app.use(express.json())
app.use(cors('*'))