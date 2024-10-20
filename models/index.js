const mongoose = require('mongoose')
const genreSchema = require('./genre')
const movieSchema = require('./movie')
const userSchema = require('./user')

const Genre = mongoose.model('Genre', genreSchema)
const Movie = mongoose.model('Movie', movieSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
  Genre,
  Movie,
  User
}
