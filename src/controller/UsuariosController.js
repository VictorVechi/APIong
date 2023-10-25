import UsuariosRepository from "../repository/UsuariosRepository.js"
import UsuariosServices from "../services/UsuariosServices.js"
import EnderecoUsuarioServices from "../services/EnderecoUsuarioServices.js"
import md5 from "md5"
class UsuariosController {
    /**
     * @param {Express} app 
     */

    static rotas(app) {
        app.get("/usuarios", async (req, res) => {
            const usuarios = await UsuariosRepository.buscarUsuarios()
            res.status(200).json(usuarios)
        })

        app.get("/usuarios/:id", async (req, res) => {
            const id = req.params.id
            const valido = await UsuariosServices.validarBusca(id)
            if(valido){   
                const usuario = await UsuariosRepository.buscarUsuariosPorId(id)
                res.status(200).json(usuario)
            } else {
                res.status(404).json({message:"Usuário não encontrado"})
            }
        })


        app.post("/usuarios", async (req, res) => {
            const body = req.body
            const senha = md5(req.get("password"))
            body.senha = senha
            body.admin = false
           
            await UsuariosRepository.criarUsuario(body)
            res.status(201).json({ message: 'Usuário criado com sucesso' })
        })

        app.post("/usuarios/login", async (req, res) => {
            try {
                const {email} = req.body
                const usuario = await UsuariosRepository.buscarUsuarioPorEmail(email)
                const senha = md5(req.get("password"))
                if(!usuario){
                    res.status(401).json({ message: "Email não encontrado.", success: false });
                }

                if (usuario.senha != senha){
                    res.status(401).json({ message: "Algo deu errado", success: false });
                } else {
                    res.status(200).json({data:usuario, success: true, senha:senha });
                }
                
            } catch (error){
                res.status(401).json({message:'error!'})
            }
        })

        app.post("/usuarios/email", async (req, res) => {
            try {
                const email = req.body
                const usuario = await UsuariosRepository.buscarUsuarioPorEmail(email.email)
                if(!usuario){
                    res.status(200).json({ success: true });
                } else {
                    res.status(401).json({ message: "Email inválido", success: false });
                }
            } catch (error){
                res.status(401).json({message:'error!'})
            }
        })

        app.put("/usuarios/:id", async (req, res) => {
            const id = req.params.id
            const data = req.body
            const valido = await UsuariosServices.validarBusca(id)
            if(valido){   
                await UsuariosRepository.atualizarUsuarios(id, data)
                res.status(204).json({ message: "Usuário atualizado com sucesso" })
            } else {
                res.status(404).json({message:"Usuário não encontrado"})
            }
        })

        app.delete("/usuarios/:id", async (req, res) => {
            const id = req.params.id
            const valido = await UsuariosServices.validarBusca(id)
            if(valido){   
                await UsuariosRepository.deletarUsuarios(id)
                res.status(204).json({ message: 'Usuário deletado com sucesso' })
            } else {
                res.status(404).json({message:"Usuário não encontrado"})
            }
        })
    }
}

export default UsuariosController
