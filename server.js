const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const genreController = require('./controllers/genreController')
const movieController = require('./controllers/movieController')
const userController = require('./controllers/userController')

const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('Welcome to my movie API'))

// Genre routes
app.get('/genres', genreController.getAllGenres)
app.get('/genres/:id', genreController.getGenreById)
app.post('/genres', genreController.createGenre)
app.put('/genres/:id', genreController.updateGenre)
app.delete('/genres/:id', genreController.deleteGenre)
app.get('/genres/name/:name', genreController.getGenreByName)

// Movie routes
app.get('/movies', movieController.getAllMovies)
app.get('/movies/:id', movieController.getMovieById)
app.post('/movies', movieController.createMovie)
app.put('/movies/:id', movieController.updateMovie)
app.delete('/movies/:id', movieController.deleteMovie)
app.get('/movies/genre/:genre', movieController.getMoviesByGenre)
app.get('/movies/title/:title', movieController.getMovieByTitle)

// User routes
app.get('/users', userController.getAllUsers)
app.get('/users/:id', userController.getUserById)
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)
app.get('/users/email/:email', userController.getUserByEmail)
app.get('/users/username/:username', userController.getUserByUsername)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
