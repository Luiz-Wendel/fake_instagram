const Publication = require('../models/Publication')
const User = require('../models/User')

module.exports = {
  create: (_req, res) => {
    return res.render('publication')
  },
  store: async (req, res) => {
    const [image] = req.files;
    const { id } = req.session.user;
    const { description } = req.body

    const user = await User.findByPk(id)

    if (!user) {
      return res.status(400).json({
        error: 'Something went wrong, if this continues, try signing out and in again'
      })
    }

    const newPost = await Publication.create({
      user_id: id,
      image: `/posts/${image.filename}`,
      description
    });

    return res.redirect("/home");
  }
}
