const db = require('../db')
const { Genre } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const genres = [
        { name: 'Action', description: 'Exciting and fast-paced films with intense sequences.' }, 
        { name: 'Comedy', description: 'Humorous films designed to entertain and amuse.' }, 
        { name: 'Drama', description: 'Narratives focused on emotional themes and character development.' }, 
        { name: 'Horror', description: 'Films intended to frighten and invoke fear.' }, 
        { name: 'Sci-Fi', description: 'Stories based on speculative scientific concepts and futuristic elements.' },
        { name: 'Fantasy', description: 'Magical and fantastical stories often set in imaginary worlds.' },
        { name: 'Romance', description: 'Stories centered around love and relationships.' },
        { name: 'Thriller', description: 'Suspenseful films that keep viewers on the edge of their seats.' },
        { name: 'Mystery', description: 'Films that involve solving a crime or uncovering secrets.' },
        { name: 'Documentary', description: 'Non-fiction films that explore real-life subjects and events.' },
        { name: 'Animation', description: 'Films created using animated techniques, appealing to all ages.' },
        { name: 'Adventure', description: 'Exciting journeys and explorations often featuring a hero.' },
        { name: 'Musical', description: 'Films that incorporate songs and dance as a central element.' },
        { name: 'Western', description: 'Films set in the American West, often featuring cowboys and outlaws.' },
        { name: 'Biographical', description: 'Dramatizations of real-life stories and figures.' },
        { name: 'Crime', description: 'Films that focus on criminal activities and their consequences.' },
        { name: 'Family', description: 'Films suitable for all ages, often featuring family themes.' },
        { name: 'War', description: 'Films that depict warfare and its impact on individuals and societies.' },
        { name: 'Sports', description: 'Stories centered around athletic competition and sports culture.' },
        { name: 'Historical', description: 'Films based on historical events and figures.' },
        { name: 'Superhero', description: 'Films featuring characters with superhuman abilities and powers.' }
    ]

    await Genre.insertMany(genres)
    console.log("Created some genres!")
}

const run = async () => {
    await main()
    db.close()
}

run()
