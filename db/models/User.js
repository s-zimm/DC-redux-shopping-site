const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    }
});

module.exports = User;