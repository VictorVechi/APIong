import EnderecoUnidade from "../model/EnderecoUnidadeModel.js"
import ValidacaoServices from "./ValidacaoServices.js"

class EnderecoUnidadeServices extends ValidacaoServices {

    static async validarBusca(id){
        const response = await this.exists(EnderecoUnidade, id)
        return response
    }

    static validarCampos(cep, rua, numero){
        return this.validarCep(cep) && this.validarRua(rua) && this.validarNumeroRua(numero)
    }

} export default EnderecoUnidadeServices