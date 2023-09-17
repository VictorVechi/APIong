import mongoose from "mongoose"

const Unidades = mongoose.model("Unidade", {
    email: String,
    telefone: String,
    id_endereco_unidade: String
})

export default Unidades