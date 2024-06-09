const express = require('express');
const { addUsers } = require('./controllers/userController');
require('./db');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/add', (req, res) => {
    res.json({ user: "add" })
})
app.use('/api/user/', require('./routes/userRoute'))

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})