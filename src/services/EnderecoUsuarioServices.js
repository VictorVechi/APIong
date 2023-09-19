import EnderecoUsuario from "../model/EnderecoUsuarioModel.js"
import ValidacaoServices from "./ValidacaoServices.js"

class EnderecoUsuarioServices extends ValidacaoServices {

    static async validarBusca(id){
        const response = await this.exists(EnderecoUsuario, id)
        return response
    }

    static validarComplemento(complemento){
        return complemento.length > 0
    }
  
    static validarCampos(cep, rua, numero, complemento){
        const complemento = this.validarComplemento(complemento)
        return this.validarCep(cep) && this.validarRua(rua) && this.validarNumeroRua(numero) && complemento
    }

} export default EnderecoUsuarioServices