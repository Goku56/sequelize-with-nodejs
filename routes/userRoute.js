const { addUser,deleteUser } = require('../controllers/userController')

const router = require('express').Router()

router.get('/addUser', addUser)

router.post('/deleteUser/:id', deleteUser)


module.exports = router;
