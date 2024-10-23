const API_URL = 'http://localhost:3001'

const movieContainer = document.getElementById('movieContainer');
const retryButton = document.getElementById('retryButton');

// Helper function to extract query parameters from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Fetch and display 5 random movies based on genre
async function loadMovies(genre) {
    try {
        const res = await axios.get(`${API_URL}/movies/genre/${genre}`);
        const randomMovies = res.data.sort(() => 0.5 - Math.random()).slice(0, 5);

        movieContainer.innerHTML = ''; // Clear previous recommendations
        randomMovies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.innerHTML = `<h2> ${movie.title}</h2> 
            <h4>  <img src="${movie.posterImage}" alt="${movie.title} Poster Image"></h4>
            <ul>
            <li><strong>Rating:</strong>${movie.rating}</li>
            <li><strong>Genre:</strong>${movie.genre}</li>
            <li><strong>Year:</strong> ${movie.releaseYear}</li>
            <li><strong>${movie.description}</strong></li>
            </ul>`;
            movieContainer.appendChild(movieElement);
        });
    } catch (error) {
        console.error('Error fetching movies:', error);
        movieContainer.innerHTML = 'Failed to load recommendations. Please try again later.';
    }
}

// Load movies based on the selected genre from the query param
const genre = getQueryParam('genre');
if (genre) {
    loadMovies(genre);
} else {
    movieContainer.innerHTML = 'No genre selected.';
}

// Retry button to reload new recommendations
retryButton.addEventListener('click', () => {
    if (genre) {
        loadMovies(genre);
    }
});