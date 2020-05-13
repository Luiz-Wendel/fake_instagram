const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
  create: (_req, res) => {
    return res.render('auth/register')
  },
  store: async (req, res) => {
    let { name, username, email, password, avatar } = req.body

    password = bcrypt.hashSync(password, 10)

    const user = await User.create({ name, username, email, password, avatar })

    return res.redirect('/')
  }
}