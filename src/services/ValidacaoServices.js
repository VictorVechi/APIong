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
} export default ValidacaoServices