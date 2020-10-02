'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Players", [
      {
        name:'Vanya Hargreeves',
        username: 'WhiteViolin7',
        password: 'number7',
        teamId: 1
    },
    {
        name:'Luther Hargreeves',
        username: 'Spaceboy1',
        password: 'number1',
        teamId: 1
    },
    {
        name:'Diego Hargreeves',
        username: 'Kraken2',
        password: 'number2',
        teamId: 1
    },
    {
        name:'Allison Hargreeves',
        username: 'Rumor3',
        password: 'number3',
        teamId: 1
    },
    {
        name:'Klaus Hargreeves',
        username: 'Medium4',
        password: 'number4',
        teamId: 1
    },
    {
        name:'Ben Hargreeves',
        username: 'Octopus6',
        password: 'number6',
        teamId: 1
    },
    {
        name:'Number 5',
        username: 'spaceTime5',
        password: 'number5',
        teamId: 1
    },
    {
        name: 'Lila',
        username: 'powerMirror2',
        password: 'msPitts2',
        teamId: 2
    }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
