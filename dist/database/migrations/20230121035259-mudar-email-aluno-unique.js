"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('alunos', 'email', {

    type: Sequelize.STRING,
    allowNull: false,
    unique: true,

  }),

  // eslint-disable-next-line no-unused-vars
  down: () => {},
};
