'use strict'

const Sequelize = require('sequelize');
const pkg = require('../../package.json');

// create the database instance that can be used in other database files
module.exports = new Sequelize(`postgres://127.0.0.1:5432/${pkg.name}`, {
  logging: false, // so we don't see all the SQL query made
});