import Repository from "../repository/Repository.js"

class ValidacaoServices {

    static async exists(MongooseModel, id){
        try{
            const response = await Repository.findById(MongooseModel, id)
            if(response == null){
                throw new error()
            }
            return true
        }catch(error){
            return false 
        }
    }

    static validarNome(nome){
        return nome.length > 2 && isNaN(nome)
    }

    static validarEmail(email){
        email = String (email)
        const index = email.indexOf("@")
        const usuario = email.substring(0, index);
        const dominio = email.substring(index + 1, email.length);

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

    static validarCep(cep){
        return cep.length == 8 && !isNaN(cep)
    }

    static  validarRua(rua){
        return rua.length > 2 && typeof(rua) == "string"
    }

    static validarNumeroRua(numero){
        return numero.length > 0 && typeof(numero) == "string"
    }

    static validarCpf_Cnpj(entrada){
        return entrada.length >= 11 && typeof(entrada) == "string"
    }

    static validarValorDoacao(valor){
        return valor != null
    }

} export default ValidacaoServices