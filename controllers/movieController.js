const { Movie } = require('../models')

const getAllMovies = async (req, res) => {
    try {
        const { title, genre } = req.query
        const filter = {}
        if (title) filter.title = new RegExp(title, 'i')
        if (genre) filter.genre = new RegExp(genre, 'i')

        const movies = await Movie.find(filter)
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getMovieByTitle = async (req, res) => {
    try {
        const { title } = req.params
        const movie = await Movie.findOne({ title: new RegExp(title, 'i') })
        if (movie) {
            return res.json(movie)
        }
        return res.status(404).send('Movie not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getMoviesByGenre = async (req, res) => {
    try {
        const { genre } = req.params
        const movies = await Movie.find({ genre: new RegExp(genre, 'i') })
        if (movies.length > 0) {
            return res.json(movies)
        }
        return res.status(404).send('No movies found for this genre')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getMovieById = async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findById(id)
        if (movie) {
            return res.json(movie)
        }
        return res.status(404).send('Movie with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body)
        await movie.save()
        return res.status(201).json(movie)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateMovie = async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
        if (movie) {
            return res.status(200).json(movie)
        }
        throw new Error("Movie not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Movie.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Movie deleted")
        }
        throw new Error("Movie not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    getMovieByTitle,
    getMoviesByGenre,
    createMovie,
    updateMovie,
    deleteMovie
}
