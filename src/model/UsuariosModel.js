import mongoose from "mongoose"

const Usuarios = mongoose.model("Usuarios", {
    nome: String,
    email: String,
    senha: String,
    telefone: String,
    Idendereco: String,
    admin: Boolean
})

export default Usuarios