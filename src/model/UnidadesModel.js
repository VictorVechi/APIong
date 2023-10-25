import mongoose from "mongoose"

const Unidades = mongoose.model("Unidades", {
    email: String,
    telefone: String,
    Idendereco: String
})

export default Unidades