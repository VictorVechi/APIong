import UnidadesRepository from "../repository/UnidadesRepository.js";

class UnidadesController {
  /**
   * @param {Express} app 
   */

  static rotas(app) {
    app.get("/unidades", async (req, res) => {
      const unidades = await UnidadesRepository.buscarUnidades();
      res.status(200).json(unidades);
    });

    app.get("/unidades/:id", async (req, res) => {
      const id = req.params.id;
      const unidade = await UnidadesRepository.buscarUnidadesPorId(id);
      res.status(200).json(unidade);
    });

    app.post("/unidades", async (req, res) => {
      const body = req.body;
      await UnidadesRepository.criarUnidades(body);
      res.status(201).json({ message: 'Unidade criada com sucesso' });
    });

    app.put("/unidades/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      await UnidadesRepository.atualizarUnidades(id, data);
      res.status(200).json({ message: "Unidade atualizada com sucesso" });
    });

    app.delete("/unidades/:id", async (req, res) => {
      const id = req.params.id;
      await UnidadesRepository.deletarUnidades(id);
      res.status(200).json({ message: 'Unidade deletada com sucesso' });
    });
  }
}

export default UnidadesController;
