import Pets from "../model/PetsModel.js"
import ValidacaoServices from "./ValidacaoServices.js"

class PetsServices extends ValidacaoServices {
    static async validarBusca(id){
        const response = await this.exists(Pets, id)
        return response
    }

    static validarRaca(raca){
        return raca.length > 2 && isNaN(raca)
    }

    static validarPeso(peso){
        return !isNaN(peso)
    }

    static validarIdade(idade){
        return idade.length > 2 
    }

} export default PetsServices