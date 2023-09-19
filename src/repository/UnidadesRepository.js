import Repository from "./Repository.js"
import Unidades from "../model/UnidadesModel.js"

class UnidadesRepository extends Repository {
    
    static async criarUnidades(data){
        await this.create(Unidades, data)
    }

    static async buscarUnidades(){
        const response = await this.findAll(Unidades)
        return response
    }

    static async buscarUnidadesPorId(id){
        const response = await this.findById(Unidades, id)
        return response
    }

    static async atualizarUnidades(id, data){
        await this.updateById(Unidades, id, data)
    }

    static async deletarUnidades(id){
        await this.deleteById(Unidades, id)
    }

} export default UnidadesRepository