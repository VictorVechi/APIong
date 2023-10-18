import mongoose from "mongoose"

const Usuarios = mongoose.model("Usuarios", {
    nome: String,
    email: String,
    senha: String,
    telefone: String,
    id_endereco_usuario: String
})

export default Usuarios