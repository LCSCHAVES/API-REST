
// metodos : index, show, update, store,destroy
/*
  index : Listagem de sessoes
  store : Criar uma sessao
  show : Quando queremos listar uma UNICA sessao
  update : Quando queremos alterar alguma sessao
  destroy : Quando queremos deletar uma sessao
*/

import User from '../models/User';

class SessioController{
  async store(req, res){
    const { email } = req.bady;
    
    // verificando se esse usuario existe
    let user = await User.findOne({ email });

    if(!user){
      user = await User.create({ email });
    }

    // let user = await User.create({ email });

    return res.json(user);
  }
}

export default new SessioController();



