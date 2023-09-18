import UsuariosRepository from "../repository/UsuariosRepository.js";

class UsuariosController {
  /**
   * @param {Express} app 
   */

  static rotas(app) {
    app.get("/Usuarios", async (req, res) => {
      const usuarios = await UsuariosRepository.buscarUsuarios();
      res.status(200).json(usuarios);
    });

    app.get("/Usuarios/:id", async (req, res) => {
      const id = req.params.id;
      const usuario = await UsuariosRepository.buscarUsuarioPorId(id);
      res.status(200).json(usuario);
    });

    app.post("/Usuarios", async (req, res) => {
      const body = req.body;
      await UsuariosRepository.criarUsuario(body);
      res.status(201).json({ message: 'Usuário criado com sucesso' });
    });

    app.put("/Usuarios/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      await UsuariosRepository.atualizarUsuarios(id, data);
      res.status(200).json({ message: "Usuário atualizado com sucesso" });
    });

    app.delete("/usuarios/:id", async (req, res) => {
      const id = req.params.id;
      await UsuariosRepository.deletarUsuarios(id);
      res.status(200).json({ message: 'Usuário deletado com sucesso' });
    });
  }
}

export default UsuariosController;
