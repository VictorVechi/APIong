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

    static validarEmail(email){
        const index = email.value.indexOf("@")
        const usuario = email.value.substring(0, index);
        const dominio = email.value.substring(index + 1, email.value.length);

        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)){
                return true
            }
        return false
    }

    static validarTelefone(telefone){
        return telefone.length == 11 && !isNaN(telefone)
    }

    static async validarCep(cep){
        return cep.length == 8 && !isNaN(cep)
    }

    static async validarRua(rua){
        return rua.length > 2 && typeof(rua) == "string"
    }

    static async validarNumeroRua(numero){
        return numero.length > 0 && typeof(numero) == "string"
    }

} export default ValidacaoServices