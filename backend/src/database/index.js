const Sequelize = require('sequelize');

const Contacts = require('../app/models/Contacts');

const databaseConfig = require('../config/database');

const models = [Contacts];

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