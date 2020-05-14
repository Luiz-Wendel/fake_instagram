const Comment = require('../models/Comment')
const Publication = require('../models/Publication')
const User = require('../models/User')

module.exports = {
  store: async (req, res) => {
    const { user } = req.session;
    const { comment } = req.body
    const publicationId = parseInt(req.params.id)

    const newComment = await Comment.create({
      user_id: user.id,
      publication_id: publicationId,
      comment
    });

    return res.redirect(`/home#post_${publicationId}`);
  }
}
