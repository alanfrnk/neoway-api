const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LogSchema = new Schema({
    type: { type: String, required: true, enum: ['get', 'post', 'put', 'delete'], default: 'get' },
    date: { type: Date, default: Date.now },
})

module.exports = Log = mongoose.model('Log', LogSchema)
