const ModelAgenda = require('./../../models/Agenda');

class Agenda {

  async list(req, res, next) {
    const agenda = await ModelAgenda.findAll();

    res.send("List -> " + typeof agenda);

    return next();
  }

  async store(req, res, next) {
    res.send("Store");
    return next();
  }

  async update(req, res, next) {
    res.send("Update");
    return next();
  }

  async delete(req, res, next) {
    res.send("Delete");
    return next();
  }

}

module.exports = new Agenda();