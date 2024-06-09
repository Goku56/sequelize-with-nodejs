const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db')

class User extends Model { }

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: true,
    modelName: 'User'
})


module.exports = User;