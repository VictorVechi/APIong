import mongoose from "mongoose";

const EnderecoUsuario = mongoose.model("EnderecoUsuario",{
    cep: String,
    rua: String,
    numero: String,
    complemento: String
})

export default EnderecoUsuario