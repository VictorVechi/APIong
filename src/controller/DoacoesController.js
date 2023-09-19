import DoacoesRepository from "../repository/DoacoesRepository.js"
import DoacoesServices from "../services/DoacoesServices.js"
class DoacoesController {
    /**
     * @param {Express} app 
     */

    static rotas(app) {
        app.get("/doacoes", async (req, res) => {
            const doacoes = await DoacoesRepository.buscarDoacoes()
            res.status(200).json(doacoes)
        })

        app.get("/doacoes/:id", async (req, res) => {
            const id = req.params.id
            const valido = await DoacoesServices.validarBusca(id)
            if (valido) {
                const doacao = await DoacoesRepository.buscarDoacoesPorId(id)
                res.status(200).json(doacao)
            } else {
                res.status(404).json({ message: "Doação não encontrada" })
            }

        })

        app.post("/doacoes", async (req, res) => {
            const body = req.body
            const valido = DoacoesServices.validarCampos(...Object.values(body))
            if (valido) {
                const tempoPassado = Date.now()
                const hoje = new Date(tempoPassado)
                body.data = hoje.toISOString()
                await DoacoesRepository.criarDoacoes(body)
                res.status(201).json({ message: 'Doação criada com sucesso' })
            } else {
                res.status(400).json({ message: 'Operação inválida, verifique os campos e tente novamente' })
            }
        })

        app.put("/doacoes/:id", async (req, res) => {
            const id = req.params.id
            const data = req.body
            const valido = DoacoesServices.validarBusca(id)
            if (valido) {
                await DoacoesRepository.atualizarDoacoes(id, data)
                res.status(200).json({ message: "Doação atualizada com sucesso" })
            } else {
                res.status(404).json({ message: "Doação não encontrada" })
            }

        })

        app.delete("/doacoes/:id", async (req, res) => {
            const id = req.params.id
            const valido = await DoacoesServices.validarBusca(id)
            if (valido) {
                await DoacoesRepository.deletarDoacoes(id)
                res.status(200).json({ message: 'Doação deletada com sucesso' })
            } else {
                res.status(404).json({ message: "Doação não encontrada" })
            }
        })
    }
}

export default DoacoesController
