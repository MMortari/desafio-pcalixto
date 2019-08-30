const Sequelize = require('sequelize');

class Contacts extends Sequelize.Model {

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

module.exports = Contacts;