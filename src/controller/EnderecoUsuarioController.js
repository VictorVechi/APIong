import EnderecoUsuarioRepository from "../repository/EnderecoUsuarioRepository.js"
import EnderecoUsuarioServices from "../services/EnderecoUsuarioServices.js"
class EnderecoUsuarioController {
    /**
     * @param {Express} app 
     */

    static rotas(app) {
        app.get("/enderecoUsuario", async (req, res) => {
            const enderecos = await EnderecoUsuarioRepository.buscarEnderecoUsuario()
            res.status(200).json(enderecos)
        })

        app.get("/enderecoUsuario/:id", async (req, res) => {
            const id = req.params.id
            const valido = await EnderecoUsuarioServices.validarBusca(id)
            if(valido){
                const endereco = await EnderecoUsuarioRepository.buscarEnderecoUsuarioPorId(id)
                res.status(200).json(endereco)
            } else {
                res.status(404).json({message:"Endereço não encontrado"})
            }
            
        })

        app.post("/enderecoUsuario", async (req, res) => {
            const body = req.body
            const valido = EnderecoUsuarioServices.validarCampos(...Object.values(body))
            if(valido) {
                const id = await EnderecoUsuarioRepository.criarEnderecoUsuario(body)
                res.status(201).json({ message: 'Endereço do Usuário criado com sucesso', id: `${id}`})
            } else {
                res.status(400).json({message:"Operação inválida, verifique os campos e tente novamente"})
            }
        })

        app.put("/enderecoUsuario/:id", async (req, res) => {
            const id = req.params.id
            const data = req.body
            const valido = await EnderecoUsuarioServices.validarBusca(id)
            if(valido){    
                await EnderecoUsuarioRepository.atualizarEnderecoUsuario(id, data)
                res.status(204).json({ message: "Endereço do Usuário atualizado com sucesso" })
            } else {
                res.status(404).json({message:"Endereço não encontrado"})
            }
        })

        app.delete("/enderecoUsuario/:id", async (req, res) => {
            const id = req.params.id
            const valido = await EnderecoUsuarioServices.validarBusca(id)
            if(valido){
                await EnderecoUsuarioRepository.deletarEnderecoUsuario(id)
                res.status(204).json({ message: 'Endereço do Usuário deletado com sucesso' })
            } else {
                res.status(404).json({message:"Endereço não encontrado"})
            }
        })
    }
} export default EnderecoUsuarioController
