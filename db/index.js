const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('sequelizeDB', 'root', '123123', {
    host: 'localhost',
    logging: false,
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (err) {
    console.error('Unable to connect to the database:');
}


const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.contact = require('../models/Contact')(sequelize, DataTypes);
db.user = require('../models/User')(sequelize, DataTypes, Model);
db.sequelize.sync({ force: true })

module.exports = db;