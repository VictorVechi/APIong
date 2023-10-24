import mongoose from "mongoose";

const Pets = mongoose.model("Pets", {
    nome: String,
    raca: String,
    peso: String,
    idade: String,
    id_unidade: String,
    descricao: String,
    usuarios: Array
})

export default Pets;