const { Schema } = require('mongoose')

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    watchlist: [{ type: Schema.Types.ObjectId, ref: 'Movie'}], 
}, 
{ timestamps: true })

module.exports = userSchema
