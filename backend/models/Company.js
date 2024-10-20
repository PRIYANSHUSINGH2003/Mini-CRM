const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the Company model
const Company = sequelize.define('Company', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    industry: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, 
    },
}, {
    timestamps: false, 
});

// Sync the model with the database
(async () => {
    await sequelize.sync({ alter: true });
})();

module.exports = Company;
