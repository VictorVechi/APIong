import Repository from "../repository/Repository.js"

class ValidacaoServices {

    static async exists(MongooseModel, id){
        try{
            await Repository.findById(MongooseModel, id)
            return true
        }catch(error){
            return false 
        }
    }

    static validarNome(nome){
        return nome.length > 2 && isNaN(nome)
    }

} export default ValidacaoServices