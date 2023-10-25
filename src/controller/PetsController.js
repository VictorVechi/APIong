import PetsRepository from "../repository/PetsRepository.js"
import PetsServices from "../services/PetsServices.js"
import UnidadeServices from "../services/UnidadesServices.js"

class PetsController {
    /**
    * @param {Express} app 
    */

    static rotas(app) {
        app.get("/pets", async (req, res) => {
            const pets = await PetsRepository.buscarPets()
            res.status(200).json(pets)
        })

        app.get("/pets/:id", async (req, res) => {
            const id = req.params.id
            const valido = await PetsServices.validarBusca(id)
            if (valido) {
                const pet = await PetsRepository.buscarPetPorId(id)
                res.status(200).json(pet)
            } else {
                res.status(404).json({ error: `Pet não encontrado` })
            }
        })

        app.post("/pets", async (req, res) => {
            const body = req.body
            const valido = PetsServices.validarCampos(...Object.values(body))
            body.id_unidade = ''
            body.usuarios = []
            await PetsRepository.criarPet(body)
            res.status(201).json({ message: 'Pet criado com sucesso' })
        })

        app.put("/pets/:id", async (req, res) => {
            const id = req.params.id
            const data = req.body
            const valido = await PetsServices.validarBusca(id)

            if (valido) {
                await PetsRepository.atualizarPet(id, data)
                res.status(204).json({ message: "Pet atualizado com sucesso" })
            } else {
                res.status(404).json({ error: `Pet não encontrado` })
            }
        })

        app.get("/pets/unidade/:idUnidade", async (req, res) => {
            const id = req.params.idUnidade
            const pet = await PetsRepository.buscarPetsPorUnidade(id)
            res.status(200).json(pet)
        })

        app.delete("/pets/:id", async (req, res) => {
            const id = req.params.id
            const valido = await PetsServices.validarBusca(id)
            if (valido) {
                await PetsRepository.deletarPet(id)
                res.status(204).json({ message: 'Pet deletado com sucesso' })
            } else {
                res.status(404).json({ error: `Pet não encontrado` })
            }
        })
    }
} export default PetsController
