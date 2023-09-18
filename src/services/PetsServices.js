import Pets from "../model/PetsModel.js"
import ValidacaoServices from "./ValidacaoServices.js"
import Unidades from "../model/UnidadesModel.js"
class PetsServices extends ValidacaoServices {
    static async validarBusca(id) {
        const response = await this.exists(Pets, id)
        return response
    }

    static validarRaca(raca) {
        return raca.length > 2 && isNaN(raca)
    }

    static validarPeso(peso) {
        return !isNaN(peso)
    }

    static validarIdade(idade) {
        return idade.length > 2
    }

    static async validarCampos(nome, raca, peso, idade, idUnidade){
        return this.validarNome(nome) && this.validarRaca(raca) && this.validarPeso(peso) && this.validarIdade(idade)
    }

} export default PetsServices