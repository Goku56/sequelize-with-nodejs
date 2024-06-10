const db = require('../db')
const Contact = db.contact
const User = db.user

const contactDetails = async (req, res) => {
    try {
        const { userId, address, phone } = req.body;
        const user = await Contact.create({ userId, address, phone })
        res.status(200).json({ user })
    } catch (err) {
        console.log(err)
    }
}

const userData = async (req, res) => {
    try {
        // const { userId, address, phone } = req.body;
        const user = await User.findAll({ include:Contact })
        res.status(200).json({ user })
    } catch (err) {
        console.log(err)
    }
}

const contactData = async (req, res) => {
    try {
        // const { userId, address, phone } = req.body;
        const user = await Contact.findAll({ include:User })
        res.status(200).json({ user })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    contactDetails,
    userData,
    contactData
}