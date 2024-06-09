module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define(
        'Contact',
        {
            // Model attributes are defined here
            userName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
            }
        },
        {
            // Other model options go here
            timestamps: true,
            freezeTableName: true
        },
    );
    return Contact;
}