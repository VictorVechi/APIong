import Usuarios from "../model/UsuariosModel.js"
import ValidacaoServices from "./ValidacaoServices.js"

class UsuariosServices extends ValidacaoServices {

    static async validarBusca(id){
        const response = await this.exists(Usuarios, id)
        return response
    }

    static validarCampos(nome, email, telefone){
        return this.validarNome(nome) && this.validarEmail(email) && this.validarTelefone(telefone)
    }

} export default UsuariosServices