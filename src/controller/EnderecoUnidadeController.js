import EnderecoUnidadeRepository from "../repository/EnderecoUnidadeRepository.js"
import EnderecoUnidadeServices from "../services/EnderecoUnidadeServices.js"
class EnderecoUnidadeController {
	/**
	 * @param {Express} app 
	 */

	static rotas(app) {
		app.get("/enderecoUnidade", async (req, res) => {
			const enderecos = await EnderecoUnidadeRepository.buscarEnderecoUnidade()
			res.status(200).json(enderecos)
		})

		app.get("/enderecoUnidade/:id", async (req, res) => {
			const id = req.params.id
			const valido = await EnderecoUnidadeServices.validarBusca(id)
			if (valido) {
				const endereco = await EnderecoUnidadeRepository.buscarEnderecoUnidadePorId(id)
				res.status(200).json(endereco)
			} else {
				res.status(404).json({ message: "Endereço não encontrado" })
			}
		})

		app.post("/enderecoUnidade", async (req, res) => {
			const body = req.body
			const valido = EnderecoUnidadeServices.validarCampos(...Object.values(body))
			if (valido) {
				const id = await EnderecoUnidadeRepository.criarEnderecoUnidade(body)
				res.status(201).json({ message: 'Endereço da Unidade criado com sucesso', id:`${id}` })
			} else {
				res.status(400).json({ message: "Operação inválida, verifique os campos e tente novamente" })
			}
		})

		app.put("/enderecoUnidade/:id", async (req, res) => {
			const id = req.params.id
			const data = req.body
			const valido = await EnderecoUnidadeServices.validarBusca(id)
			if (valido) {
				await EnderecoUnidadeRepository.atualizarEnderecoUnidade(id, data)
				res.status(200).json({ message: "Endereço da Unidade atualizado com sucesso" })
			} else {
				res.status(404).json({ message: "Endereço não encontrado" })
			}
		})

		app.delete("/enderecoUnidade/:id", async (req, res) => {
			const id = req.params.id
			const valido = await EnderecoUnidadeServices.validarBusca(id)
			if (valido) {
				await EnderecoUnidadeRepository.deletarEnderecoUnidade(id)
				res.status(200).json({ message: 'Endereço da Unidade deletado com sucesso' })
			} else {
				res.status(404).json({ message: "Endereço não encontrado" })
			}
		})
	}
} export default EnderecoUnidadeController
