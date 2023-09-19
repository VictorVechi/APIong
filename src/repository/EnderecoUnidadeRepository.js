import Repository from "./Repository.js"
import EnderecoUnidade from "../model/EnderecoUnidadeModel.js"

class EnderecoUnidadeRepository extends Repository {

    /**
     * Método para criar endereço da unidade
     * @param {*} data 
     */
    static async criarEnderecoUnidade(data){
        const response = await this.create(EnderecoUnidade, data)
        const id = JSON.stringify(response._id)
        return id
    }

    /**
     * Método para buscar todos os endereços das unidades
     * @returns {<Array> Endereco} response
     */
    static async buscarEnderecoUnidade(){
       const response = await this.findAll(EnderecoUnidade)
       return response
    }

    /**
     * Método para buscar endereço da unidade por ID
     * @param {String} id 
     * @returns {Data}
     */
    static async buscarEnderecoUnidadePorId(id){
        const response = await this.findById(EnderecoUnidade, id)
        return response
    }

    /**
     * Método para atualizar o endereço da unidade por ID
     * @param {String} id 
     * @param {*} data 
     */
    static async atualizarEnderecoUnidade(id, data){
        await this.updateById(EnderecoUnidade, id, data)
    }

    /**
     * Método para deletar o endereço da unidade por ID
     * @param {String} id 
     */
    static async deletarEnderecoUnidade(id){
        await this.deleteById(EnderecoUnidade, id)
    }
} export default EnderecoUnidadeRepository