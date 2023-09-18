import DoacoesRepository from "../repository/DoacoesRepository.js";

class DoacoesController {
  /**
   * @param {Express} app 
   */

  static rotas(app) {
    app.get("/doacoes", async (req, res) => {
      const doacoes = await DoacoesRepository.buscarDoacoes();
      res.status(200).json(doacoes);
    });

    app.get("/doacoes/:id", async (req, res) => {
      const id = req.params.id;
      const doacao = await DoacoesRepository.buscarDoacoesPorId(id);
      res.status(200).json(doacao);
    });

    app.post("/doacoes", async (req, res) => {
      const body = req.body;
      await DoacoesRepository.criarDoacoes(body);
      res.status(201).json({ message: 'Doação criada com sucesso' });
    });

    app.put("/doacoes/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      await DoacoesRepository.atualizarDoacoes(id, data);
      res.status(200).json({ message: "Doação atualizada com sucesso" });
    });

    app.delete("/doacoes/:id", async (req, res) => {
      const id = req.params.id;
      await DoacoesRepository.deletarDoacoes(id);
      res.status(200).json({ message: 'Doação deletada com sucesso' });
    });
  }
}

export default DoacoesController;
 