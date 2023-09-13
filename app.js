import express from "express";

const app = express()
const porta = process.env.PORT || 3000

app.listen(porta, ()=>{
    console.log(`Aplicação online na porta: ${porta}`)
})

app.use(express.json())