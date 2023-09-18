import express from "express";
import mongoose from "mongoose";
import { config } from 'dotenv'
import cors from "cors"
import PetsController from "./src/controller/PetsController.js";
import DoacoesControllers from "./src/controller/DoacoesController.js";

config()

const app = express()

const PORT = process.env.PORT || 3000
const USER = process.env.USER_DB || "local"
const DATABASE = process.env.DATABASE || "local"
const PASSWORD = process.env.PASSWORD || "local"
const CLUSTER = process.env.CLUSTER || "local"

mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.${DATABASE}.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Aplicação online na porta: ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error.message)
})

app.use(express.json())
app.use(cors('*'))
PetsController.rotas(app)
DoacoesControllers.rotas(app)