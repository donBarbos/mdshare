import db from '@lib/db'

const pageSchema = new db.Schema({
  _id: { type: String, required: true, trim: true },
  title: { type: String, required: false, trim: true },
  author: { type: String, required: false, trim: true },
  text: { type: String, required: true, trim: true },
  isCommentable: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  expireAt: { type: Date, required: false, expires: 3600 },
})

export default db.models.pages || db.model('pages', pageSchema)
