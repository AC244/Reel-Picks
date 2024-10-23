const API_URL = 'http://localhost:3001'
const retryButton = document.getElementById('retryButton');

async function loadMovies() {
    try {
    const res = await axios.get(`${API_URL}/movies`)
    
    const watchlist = document.getElementById('watchlist')
    const randomMovies = res.data.sort(() => 0.5 - Math.random()).slice(0, 10)
    watchlist.innerHTML = ''
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
        watchlist.appendChild(movieElement);
    });}
 catch (error) {
    console.error('Error fetching movies:', error);
    watchlist.innerHTML = 'Failed to load recommendations. Please try again later.';
}}
loadMovies()


// Retry button to reload new recommendations
retryButton.addEventListener('click', () => {
loadMovies()
});



