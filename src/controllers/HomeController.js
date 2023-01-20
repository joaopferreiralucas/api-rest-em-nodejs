import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'joao',
      sobrenome: 'henrique',
      email: 'joaozinho@gmail.com',
      idade: 10,
      peso: 500,
      altura: 1.9,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
