import mongoose from "mongoose";

const EnderecoUnidade = mongoose.model("EnderecoUnidade",{
    cep: String,
    rua: String,
    numero: String
}) 

export default EnderecoUnidade;