import Repository from "./Repository.js"
import Usuarios from "../model/UsuariosModel.js"

class UsuariosRepository extends Repository {
    static async criarUsuario(data){
        await this.create(Usuarios, data)
    }

    static async buscarUsuarios(){
        const response = await this.findAll(Usuarios)
        return response
    }

    static async buscarUsuariosPorId(id){
        const response = await this.findById(Usuarios, id)
        return response
    }

    static async atualizarUsuarios(id,data){
        await this.updateById(Usuarios, id, data)
    }

    static async deletarUsuarios(id){
        await this.deleteById(Usuarios, id)
    }
} export default UsuariosRepository