import mongoose from "mongoose"

const Doacoes = mongoose.model("Doacoes",{
    valor: Number,
    data: String,
    cpf_cnpj: String
})
export default Doacoes