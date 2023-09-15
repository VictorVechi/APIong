import PetsRepository from "../repository/PetsRepository.js";

class PetsController {
  /**
   * @param {Express} app 
   */

  static rotas(app) {
    app.get("/pets", async (req, res) => {
      try {
        const pets = await PetsRepository.buscarPets();
        res.status(200).json(pets);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pets' });
      }
    });

    app.get("/pets/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const pet = await PetsRepository.buscarPetPorId(id);

        if (!pet) {
          res.status(404).json({ error: 'Pet não encontrado' });
        } else {
          res.status(200).json(pet);
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pet por ID' });
      }
    });

    app.post("/pets", async (req, res) => {
      try {
        const body = req.body;
        await PetsRepository.criarPet(body);
        res.status(201).json({ message: 'Pet criado com sucesso' });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar pet' });
      }
    });

    app.put("/pets/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const data = req.body;
        await PetsRepository.atualizarPet(id, data);
        res.status(200).json({ message: 'Pet atualizado com sucesso' });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pet' });
      }
    });

    app.delete("/pets/:id", async (req, res) => {
      try {
        const id = req.params.id;
        await PetsRepository.deletarPet(id);
        res.status(200).json({ message: 'Pet deletado com sucesso' });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar pet' });
      }
    });
  }
}

export default PetsController;
