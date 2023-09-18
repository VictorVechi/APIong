import Doacoes from "../model/DoacoesModel.js"
import ValidacaoServices from "./ValidacaoServices.js"

class DoacoesServices extends ValidacaoServices {

    static async validarBusca(id){
        const response = await this.exists(Doacoes, id)
        return response
    }  

    static validarCampos(cpf_cnpj, valor){
        const validaCpf = this.validarCpf_Cnpj(cpf_cnpj)
        const validaValor = this.validarValorDoacao(valor)
        return validaCpf && validaValor
    }

} export default DoacoesServices