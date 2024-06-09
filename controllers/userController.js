const db = require('../db')
const User = db.user;

const addUser = async (req, res) => {
    try {
        const user = await User.create({
            firstName: "Gokul",
            lastName: "Modi",
            email: "gokulmodi@gmail",
            password: "123123"
        })
        res.status(200).json({ user })
    } catch (err) {
        console.log(err)
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.find
    } catch (err) {
        console.log(err)
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.destroy({
            where: {
                id: req.params.id   
            }
        })
        res.status(200).json({ message: "deleted successfully" })
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    addUser,
    deleteUser
}