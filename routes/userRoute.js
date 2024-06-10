const { contactDetails, userData, contactData } = require('../controllers/contactController')
const { deleteUser, getUserById, updateUser, createUser, allUsers } = require('../controllers/userController')

const router = require('express').Router()

//user routes
router.post('/add', createUser)
router.get('/allUsers', allUsers)
router.get('/get/:id', getUserById)
router.patch('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

//contact routes
router.post('/addContact', contactDetails)
router.get('/userData', userData)
router.get('/contactData', contactData)


module.exports = router;
