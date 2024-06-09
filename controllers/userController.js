const db = require('../db')
const User = db.user;

const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const userfound = await User.findOne({ where: { id: id } })
        if (!id || !userfound) {
            return res.status(404).json({ message: "NOT FOUND" })
        }
        const user = await User.findOne({ where: { id: id } })
        if (!user) {
            return res.status(404).json({ message: "NOT FOUND" })
        }
        res.status(200).json({ user })
    } catch (err) {
        console.log(err)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const userfound = await User.findOne({ where: { id: id } })
        if (!id || !userfound) {
            return res.status(404).json({ message: "NOT FOUND" })
        }
        const user = await User.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!user) {
            return res.status(404).json({ message: "user id not found" })
        }
        res.status(200).json({ message: "deleted successfully" })
    } catch (err) {
        console.log(err)
    }
}

const allUsers = async (req, res) => {
    try {
        const users = await User.findAll({})
        res.status(200).json({ users })
    } catch (err) {
        console.log(err)
    }
}

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await User.create({ firstName, lastName, email, password })
        res.status(200).json({ user })
    } catch (err) {
        console.log(err)
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const userfound = await User.findOne({ where: { id: id } })
        if (!id || !userfound) {
            return res.status(404).json({ message: "NOT FOUND" })
        }
        const udpateData = req.body
        const user = 
        await User.update(udpateData,{ where: { id: id }});
        res.status(200).json({ user })
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    deleteUser,
    getUserById,
    allUsers,
    updateUser,
    createUser
}   