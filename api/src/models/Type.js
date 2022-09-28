const { DataTypes, UUIDV4 } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('type', {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}