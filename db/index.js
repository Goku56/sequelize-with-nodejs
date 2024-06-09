const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelizeDB', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql'
});

const db=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:');
    }
}

db();