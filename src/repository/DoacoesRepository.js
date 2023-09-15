import Repository from "./Repository.js";
import Doacoes from "../model/DoacoesModel.js"

class DoacoesRepository extends Repository {

    static async criarDoacoes(data){
        await this.create(Doacoes, data)
    }

    static async buscarDoacoes(){
       const response = await this.findAll(Doacoes)
       return response
    }

    static async buscarDoacoesPorId(id){
        const response = await this.findById(Doacoes, id)
        return response
    }

    static async atualizarDoacoes(id, data){
        await this.updateById(Doacoes, id, data)
    }

    static async deletarDoacoes(id){
        await this.deleteById(Doacoes, id)
    }
}