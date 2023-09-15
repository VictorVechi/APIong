import Repository from "./Repository.js"
import Pets from "../model/PetsModel.js"

class PetsRepository extends Repository{

    static async criarPet (data){
        await this.create(Pets, data)
    }

    static async buscarPets(){
        const response = await this.findAll(Pets)
        return response
    }

    static async buscarPetPorId(id){
        const response = await this.findById(Pets, id)
        return response
    }

    static async atualizarPet(id, data){
        await this.updateById(Pets, id, data)
    }
   
    static async deletarPet(id){
        await this.deleteById(Pets, id)
    }
}

export default PetsRepository