const { Schema } = require('mongoose');

const movieSchema = new Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: String, enum: ['G', 'PG', 'PG-13', 'R'], required: true },
    posterImage: { type: String, required: true }
}, 
{ timestamps: true });

module.exports = movieSchema;
