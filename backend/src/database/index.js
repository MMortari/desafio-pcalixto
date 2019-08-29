const Sequelize = require('sequelize');

// Models
const AgendaModel = require('./../app/models/Agenda');

// Database config
const databaseConfig = require('./../config/database');

// Conexão
const db = new Sequelize(databaseConfig);

AgendaModel.init(db);

module.exports = db;