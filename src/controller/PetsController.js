import PetsRepository from "../repository/PetsRepository.js"
import PetsServices from "../services/PetsServices.js"
import EnderecoUnidadeServices from "../services/EnderecoUnidadeServices.js"

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
            const unidade = EnderecoUnidadeServices.validarBusca(body.id_unidade)
            if(valido && unidade){
                await PetsRepository.criarPet(body)
                res.status(201).json({ message: 'Pet criado com sucesso' })
            } else {
                res.status(400).json({message:"Operação inválida, verifique os campos e tente novamente"})
            }
        })

        app.put("/pets/:id", async (req, res) => {
            const id = req.params.id
            const data = req.body
            const valido = await PetsServices.validarBusca(id)

            if (valido) {
                await PetsRepository.atualizarPet(id, data)
                res.status(200).json({ message: "Pet atualizado com sucesso" })
            } else {
                res.status(404).json({ error: `Pet não encontrado` })
            }
        })

        app.delete("/pets/:id", async (req, res) => {
            const id = req.params.id
            const valido = await PetsServices.validarBusca(id)
            if (valido) {
                await PetsRepository.deletarPet(id)
                res.status(200).json({ message: 'Pet deletado com sucesso' })
            } else {
                res.status(404).json({ error: `Pet não encontrado` })
            }
        })
    }
} export default PetsController
