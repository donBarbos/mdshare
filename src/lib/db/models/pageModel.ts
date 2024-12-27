import db from '@lib/db'

const pageSchema = new db.Schema({
  _id: { type: String, required: true, trim: true, index: true },
  title: { type: String, required: false, trim: true },
  author: { type: String, required: false, trim: true },
  text: { type: String, required: true, trim: true },
  createdAt: { type: Date, required: true, default: Date.now },
  expireAt: { type: Date, required: false, expires: 3600 },
})

export default db.models.pages || db.model('pages', pageSchema)
