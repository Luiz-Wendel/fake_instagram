const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
  create: (_req, res) => {
    return res.render('auth/login')
  },
  store: async (req, res) => {
    let { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.render('auth/login', {
        msg: 'Invalid email or password'
      })
    }

    req.session.user = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email
    }

    return res.redirect('/home')
  }
}