import Unidades from "../model/UnidadesModel.js"
import ValidacaoServices from "./ValidacaoServices.js"

class UnidadesServices extends ValidacaoServices{
    
    static async validarBusca(id){
        const response = await this.exists(Unidades, id)
        return response
    }

    static async validarCampos(email, telefone){
        return this.validarEmail(email) && this.validarTelefone(telefone)
    }

} export default UnidadesServices