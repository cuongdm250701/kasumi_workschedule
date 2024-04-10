const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require(`${__dirname}/../config/env.js`);

class Remark extends Model {}

Remark.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    store_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    remark_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    remark_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tuesday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wednesday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thursday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    friday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saturday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sunday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "remark",
    freezeTableName: true,
  }
);

Remark.associations = () => {};

module.exports = () => Remark;
