const Sequelize = require('sequelize');

const Agendamentos = require('../app/models/Agendamentos');

const databaseConfig = require('../config/database');

const models = [Agendamentos];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection))
  }
}

module.exports = new Database();