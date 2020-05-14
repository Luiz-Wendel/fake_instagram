const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Publication = require('../models/Publication')

const connection = new Sequelize(dbConfig)

User.init(connection)
Publication.init(connection)

User.associate(connection.models)
Publication.associate(connection.models)

module.exports = connection