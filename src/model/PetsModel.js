import mongoose from "mongoose";

const Pets = mongoose.model("Pets", {
    nome: String,
    raca: String,
    peso: Number,
    idade: String,
    id_unidade: String
})

export default Pets;