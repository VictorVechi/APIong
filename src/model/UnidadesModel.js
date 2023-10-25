import mongoose from "mongoose"

const Unidades = mongoose.model("Unidades", {
    nome: String,
    email: String,
    telefone: String,
    Idendereco: String
})

export default Unidades