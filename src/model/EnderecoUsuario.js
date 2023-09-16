import mongoose from "mongoose";

const EnderecoUsuario = mongoose.model("Endereco_Usuario",{
    cep: String,
    rua: String,
    numero: String,
    complemento: String
})

export default EnderecoUsuario