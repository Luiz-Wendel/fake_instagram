const moment = require('moment')

// models
const User = require('../models/User')
const Publication = require('../models/Publication')

module.exports = {
  index: async (req, res) => {
    let publications = await Publication.findAll({
      include: [{
        association: 'user'
      },{
        association: 'comments',
        include: {
          association: 'user'
        }
      }]
    })

    res.render('index', { publications, moment })
  },
  myPosts: async (req, res) => {
    const { user } = req.session

    const userPublications = await User.findByPk(user.id, {
      include: {
        association: 'publications',
        include: [{
          association: 'user'
        },{
          association: 'comments',
          include: {
            association: 'user'
          }
        }]
      }
    })

    const publications = userPublications.publications

    res.render('my_posts', { publications, moment })
  }
}