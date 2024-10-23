const API_URL = 'http://localhost:3001'

document.getElementById('moodGenreForm').addEventListener('submit', function(e) {
    e.preventDefault()
    const selectedGenre = document.getElementById('moodSelect').value
    if (selectedGenre) {
        window.location.href = `recommendations.html?genre=${selectedGenre}`
    } else {
        alert('Please select a mood or genre.')
    }
})