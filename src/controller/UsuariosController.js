import UsuariosRepository from "../repository/UsuariosRepository.js"
import UsuariosServices from "../services/UsuariosServices.js"
import EnderecoUsuarioServices from "../services/EnderecoUsuarioServices.js"
class UsuariosController {
    /**
     * @param {Express} app 
     */

    static rotas(app) {
        app.get("/Usuarios", async (req, res) => {
            const usuarios = await UsuariosRepository.buscarUsuarios()
            res.status(200).json(usuarios)
        })

        app.get("/Usuarios/:id", async (req, res) => {
            const id = req.params.id
            const valido = await UsuariosServices.validarBusca(id)
            if(valido){   
                const usuario = await UsuariosRepository.buscarUsuarioPorId(id)
                res.status(200).json(usuario)
            } else {
                res.status(404).json({message:"Usuário não encontrado"})
            }
        })

        app.post("/Usuarios", async (req, res) => {
            const body = req.body
            const valido = UsuariosServices.validarCampos(...Object.values(body))
            const enderecoValido = EnderecoUsuarioServices.validarBusca(body.id_endereco_usuario)
            if(valido && enderecoValido){
                await UsuariosRepository.criarUsuario(body)
                res.status(201).json({ message: 'Usuário criado com sucesso' })
            } else {
                res.status(400).json({message:"Operação inválida, verifique os campos e tente novamente"})
            }
        })

        app.put("/Usuarios/:id", async (req, res) => {
            const id = req.params.id
            const data = req.body
            const valido = await UsuariosServices.validarBusca(id)
            if(valido){   
                await UsuariosRepository.atualizarUsuarios(id, data)
                res.status(200).json({ message: "Usuário atualizado com sucesso" })
            } else {
                res.status(404).json({message:"Usuário não encontrado"})
            }
        })

        app.delete("/usuarios/:id", async (req, res) => {
            const id = req.params.id
            const valido = await UsuariosServices.validarBusca(id)
            if(valido){   
                await UsuariosRepository.deletarUsuarios(id)
                res.status(200).json({ message: 'Usuário deletado com sucesso' })
            } else {
                res.status(404).json({message:"Usuário não encontrado"})
            }
        })
    }
}

export default UsuariosController
