const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Publication = require('../models/Publication')
const Comment = require('../models/Comment')

const connection = new Sequelize(dbConfig)

User.init(connection)
Publication.init(connection)
Comment.init(connection)

User.associate(connection.models)
Publication.associate(connection.models)
Comment.associate(connection.models)

module.exports = connection