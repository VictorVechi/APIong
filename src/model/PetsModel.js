import mongoose from "mongoose";

const Pets = mongoose.model("Pets", {
    id_pet: Number,
    nome: String,
    raca: String,
    peso: Number,
    idade: String,
    id_unidade: Number
})

export default Pets;