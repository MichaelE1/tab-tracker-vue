const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occurred trying to fetch the bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const {songId, userId} = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })

      if (bookmark) {
        return res.status(400).send({
          error: 'You have already set this as a bookmark'
        })
      }

      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })

      res.send(newBookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occurred trying to create the bookmark'
      })
    }
  },
  async remove (req, res) {
    try {
      const {bookmarkId} = req.params

      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to delete the bookmark'
      })
    }
  }
}
