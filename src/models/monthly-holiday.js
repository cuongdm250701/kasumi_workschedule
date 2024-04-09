const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require(`${__dirname}/../config/env.js`);

class MonthlyHoliday extends Model {}

MonthlyHoliday.init(
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
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    january: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    february: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    march: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    april: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    may: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    june: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    july: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    august: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    september: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    october: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    november: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    december: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "monthly_holiday",
    freezeTableName: true,
  }
);

MonthlyHoliday.associations = () => {};

module.exports = () => MonthlyHoliday;
