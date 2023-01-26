import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();

    return res.json(alunos);
  }

  async store(req, res) {
    try {
      const newAluno = await Aluno.create(req.body);
      return res.json(newAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID nao enviado'],
        });
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        });
      }

      await aluno.destroy();
      return res.json({
        usuario: aluno,
        msg: ['Este aluno foi deletado'],
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);

      return res.json(aluno);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.alunoId);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        });
      }

      const novosDados = await aluno.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
