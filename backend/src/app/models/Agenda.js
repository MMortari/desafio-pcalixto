const Sequelize = require('sequelize');

class ModelAgenda extends Sequelize.Model {

  static init(sequelize) {
    super.init(
      {
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        phone: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )

    return this;
  }

}

module.exports = ModelAgenda;

// module.exports = (sequelize, DataTypes) => {
//   const Agenda = sequelize.define("Agenda", {
//     first_name: DataTypes.STRING,
//     last_name: DataTypes.STRING,
//     phone: DataTypes.STRING,
//     email: DataTypes.STRING,
//   });

//   return Agenda;
// }