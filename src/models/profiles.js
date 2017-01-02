const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
  name: String,
  badges: Array,
  image: String,
  visible: Boolean
})

module.exports = mongoose.model('Profile', ProfileSchema)
