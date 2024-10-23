
const API_URL = 'http://localhost:3001'

// Handle Review Submission
document.getElementById('reviewForm')?.addEventListener('submit', e => {
    e.preventDefault()
    const movieTitle = document.getElementById('movieTitle').value
    const reviewText = document.getElementById('reviewText').value

    const reviewsList = document.getElementById('reviewsList')
    const li = document.createElement('li')
    li.innerHTML = `<strong>${movieTitle}:</strong> ${reviewText}`
    reviewsList.appendChild(li)

    e.target.reset()
})
