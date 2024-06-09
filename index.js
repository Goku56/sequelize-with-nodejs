const express = require('express');
require('./db');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})