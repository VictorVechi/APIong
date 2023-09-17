import Repository from "./Repository.js"
import EnderecoUsuario from "../model/EnderecoUsuarioModel.js"

class EnderecoUsuarioRepository extends Repository {

    /**
     * Método para criar endereço do usuário
     * @param {*} data 
     */
    static async criarEnderecoUsuario(data){
        await this.create(EnderecoUsuario, data)
    }

    /**
     * Método para buscar todos os endereços dos usuários
     * @returns {<Array> Endereco} response
     */
    static async buscarEnderecoUsuario(){
       const response = await this.findAll(EnderecoUsuario)
       return response
    }

    /**
     * Método para buscar endereço do usuário por ID
     * @param {String} id 
     * @returns {Data}
     */
    static async buscarEnderecoUsuarioPorId(id){
        const response = await this.findById(EnderecoUsuario, id)
        return response
    }

    /**
     * Método para atualizar o endereço do usuário por ID
     * @param {String} id 
     * @param {*} data 
     */
    static async atualizarEnderecoUsuario(id, data){
        await this.updateById(EnderecoUsuario, id, data)
    }

    /**
     * Método para deletar o endereço do usuário por ID
     * @param {String} id 
     */
    static async deletarEnderecoUsuario(id){
        await this.deleteById(EnderecoUsuario, id)
    }
} export default EnderecoUsuarioRepository