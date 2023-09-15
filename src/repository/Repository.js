
class Repository {

    /**
     * Método geral de registrar
     * @param {mongooseModel} mongoModel 
     * @param {Object} data 
     */
    static async create(mongoModel, data){
        await mongoModel.create(data)
    }

    /**
     * Método geral para buscar todos os itens
     * @param {mongooseModel} mongoModel 
     * @returns {<Array> Data}
     */
    static async findAll(mongoModel){
        const response = await mongoModel.find()
        return response
    }

    /**
     * Método geral para buscar por id
     * @param {mongooseModel} mongoModel 
     * @param {String} id 
     * @returns {Data}
     */
    static async findById(mongoModel, id){
        const response = await mongoModel.findOne({_id:id})
        return response
    }

    /**
     * Método geral de busca por campo
     * @param {mongooseModel} mongoModel 
     * @param {String} chave 
     * @param {String} valor 
     * @returns {Data}
     */
    static async findByKey(mongoModel, chave, valor){
        const response = await mongoModel.findOne({[chave]:valor})
        return response
    }

    /**
     * Método geral de atualização por id
     * @param {mongooseModel} mongoModel 
     * @param {String} id 
     * @param {Object} data 
     * @returns {Data}
     */
    static async updateById(mongoModel, id, data){
        await mongoModel.updateOne({_id:id}, data)
    }

    /**
     * Método geral de deleção  por id
     * @param {mongooseModel} mongoModel 
     * @param {String} id 
     */
    static async deleteById(mongoModel, id){
        await mongoModel.findOneAndDelete({_id:id})
    }
}

export default Repository