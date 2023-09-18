import EnderecoUsuarioRepository from "../repository/EnderecoUsuarioRepository.js";

class EnderecoUsuarioController {
  /**
   * @param {Express} app 
   */

  static rotas(app) {
    app.get("/enderecoUsuario", async (req, res) => {
      const enderecos = await EnderecoUsuarioRepository.buscarEnderecoUsuario();
      res.status(200).json(enderecos);
    });

    app.get("/enderecoUsuario/:id", async (req, res) => {
      const id = req.params.id;
      const endereco = await EnderecoUsuarioRepository.buscarEnderecoUsuarioPorId(id);
      res.status(200).json(endereco);
    });

    app.post("/enderecoUsuario", async (req, res) => {
      const body = req.body;
      await EnderecoUsuarioRepository.criarEnderecoUsuario(body);
      res.status(201).json({ message: 'Endereço do Usuário criado com sucesso' });
    });

    app.put("/enderecoUsuario/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      await EnderecoUsuarioRepository.atualizarEnderecoUsuario(id, data);
      res.status(200).json({ message: "Endereço do Usuário atualizado com sucesso" });
    });

    app.delete("/enderecoUsuario/:id", async (req, res) => {
      const id = req.params.id;
      await EnderecoUsuarioRepository.deletarEnderecoUsuario(id);
      res.status(200).json({ message: 'Endereço do Usuário deletado com sucesso' });
    });
  }
}

export default EnderecoUsuarioController;
