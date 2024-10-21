const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        { username: 'john_doe', 
        email: 'john@example.com', 
        password: 'password123', 
        watchlist: [] }, 
    ]

    await User.insertMany(users)
    console.log("Created some users!")
}

const run = async () => {
    await main()
    db.close()
}

run()
