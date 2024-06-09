const express = require('express');
const User = require('./models/User');
const sequelize = require('./db');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

sequelize.sync()

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})