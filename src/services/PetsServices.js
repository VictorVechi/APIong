import Pets from "../model/PetsModel.js"
import ValidacaoServices from "./ValidacaoServices.js"

class PetsServices extends ValidacaoServices {
    static async validarBusca(id){
        const response = await this.exists(Pets, id)
        return response
    }
} export default PetsServices