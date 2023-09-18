import EnderecoUnidadeRepository from "../repository/EnderecoUnidadeRepository.js";

class EnderecoUnidadeController {
  /**
   * @param {Express} app 
   */

  static rotas(app) {
    app.get("/enderecoUnidade", async (req, res) => {
      const enderecos = await EnderecoUnidadeRepository.buscarEnderecoUnidade();
      res.status(200).json(enderecos);
    });

    app.get("/enderecoUnidade/:id", async (req, res) => {
      const id = req.params.id;
      const endereco = await EnderecoUnidadeRepository.buscarEnderecoUnidadePorId(id);
      res.status(200).json(endereco);
    });

    app.post("/enderecoUnidade", async (req, res) => {
      const body = req.body;
      await EnderecoUnidadeRepository.criarEnderecoUnidade(body);
      res.status(201).json({ message: 'Endereço da Unidade criado com sucesso' });
    });

    app.put("/enderecoUnidade/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      await EnderecoUnidadeRepository.atualizarEnderecoUnidade(id, data);
      res.status(200).json({ message: "Endereço da Unidade atualizado com sucesso" });
    });

    app.delete("/enderecoUnidade/:id", async (req, res) => {
      const id = req.params.id;
      await EnderecoUnidadeRepository.deletarEnderecoUnidade(id);
      res.status(200).json({ message: 'Endereço da Unidade deletado com sucesso' });
    });
  }
}

export default EnderecoUnidadeController;
