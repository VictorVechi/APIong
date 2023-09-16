import mongoose from "mongoose";

const EnderecoUnidade = mongoose.model("Endereco_Unidade",{
    cep: String,
    rua: String,
    numero: String
}) 

export default EnderecoUnidade;