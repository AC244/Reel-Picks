const { User } = require('../models')

const getAllUsers = async (req, res) => {
    try {
        const { username, email } = req.query
        const filter = {}
        if (username) filter.username = new RegExp(username, 'i') 
        if (email) filter.email = new RegExp(email, 'i')

        const users = await User.find(filter)
        res.json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getUserByUsername = async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ username: new RegExp(username, 'i') })
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('User not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params
        const user = await User.findOne({ email: new RegExp(email, 'i') })
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('User not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('User with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error("User not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("User deleted")
        }
        throw new Error("User not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsername,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
}