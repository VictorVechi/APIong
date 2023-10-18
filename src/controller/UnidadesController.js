import UnidadesRepository from "../repository/UnidadesRepository.js"
import UnidadesServices from "../services/UnidadesServices.js"
import EnderecoUnidadeServices from "../services/EnderecoUnidadeServices.js"
class UnidadesController {
    /**
     * @param {Express} app 
     */

    static rotas(app) {
        app.get("/unidades", async (req, res) => {
            const unidades = await UnidadesRepository.buscarUnidades()
            res.status(200).json(unidades)
        })

        app.get("/unidades/:id", async (req, res) => {
            const id = req.params.id
            const valido = await UnidadesServices.validarBusca(id)
            if(valido){
                const unidade = await UnidadesRepository.buscarUnidadesPorId(id)
                res.status(200).json(unidade)
            } else {
                res.status(400).json({message:"Unidade não encontrada"})
            }
        })

        app.post("/unidades", async (req, res) => {
            const body = req.body
            const valido = UnidadesServices.validarCampos(...Object.values(body))
            body.endereco = ''
            if(valido){
                await UnidadesRepository.criarUnidades(body)
                res.status(201).json({ message: 'Unidade criada com sucesso' })
            } else {
                res.status(400).json({ message: "Operação inválida, verifique os campos e tente novamente"})
            }
        })

        app.put("/unidades/:id", async (req, res) => {
            const id = req.params.id
            const data = req.body
            const valido = await UnidadesServices.validarBusca(id)
            if(valido){
                await UnidadesRepository.atualizarUnidades(id, data)
                res.status(204).json({ message: "Unidade atualizada com sucesso" })
            } else {
                
            }
        })

        app.delete("/unidades/:id", async (req, res) => {
            const id = req.params.id
            const valido = await UnidadesServices.validarBusca(id)
            if(valido){
                await UnidadesRepository.deletarUnidades(id)
                res.status(204).json({ message: 'Unidade deletada com sucesso' })
            } else {
                res.status(404).json({message:"Unidade não encontrada"})
            }
        })
    }
}

export default UnidadesController
