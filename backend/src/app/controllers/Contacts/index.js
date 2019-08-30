const ModelContact = require('../../models/Contacts');

class Agenda {

  async list(req, res, next) {
    const agenda = await ModelContact.findAll();

    res.send(agenda);

    return next();
  }

  async listOne(req, res, next) {
    const agenda = await ModelContact.findOne({
      where: { id: req.params.id }
    });

    if(agenda) {
      res.send(agenda);
    } else {
      res.send({ error: "Não há nenhum registro com esse Id" });
    }

    return next();
  }

  async store(req, res, next) {
    const data = req.body;
    
    const response = await ModelContact.create(data);

    res.send(response);
    return next();
  }

  async update(req, res, next) {
    const { id } = req.params;
    const data = req.body;

    const find = await ModelContact.findOne({
      where: { id }
    })

    let response = { error: "Não há nenhum registro com esse Id" };

    if(find) {
      await ModelContact.update(data, {
        where: { id },
      });
      response = { msg: "Contato atualizado com sucesso" };
    }

    res.send(response);
    return next();
  }

  async delete(req, res, next) {
    const { id } = req.params;

    const find = await ModelContact.findOne({
      where: { id }
    })

    let response = { error: "Não há nenhum registro com esse Id" };

    if(find) {
      response = await ModelContact.destroy({
        where: { id },
      });
    }

    res.send(response);
    return next();
  }

}

module.exports = new Agenda();