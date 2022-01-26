'use strict';

const Clothes = (sequelize, DataTypes) => {
    return sequelize.define('Clothes', {
        clothesName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        clothesSize: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            defaultValue: 1,
        },
    });
};

module.exports = Clothes;
