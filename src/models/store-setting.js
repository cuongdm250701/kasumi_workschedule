const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require(`${__dirname}/../config/env.js`);

class StoreSetting extends Model {}

StoreSetting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    process_month: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    store_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pos_machines_no_employee_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    pos_machines_with_employee_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    start_time: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "00:00",
    },
    end_time: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "00:00",
    },
    opening_time: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "00:00",
    },
    closing_time: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "00:00",
    },
    work_start_day: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    attendant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "store_setting",
    freezeTableName: true,
  }
);

StoreSetting.associations = () => {};

module.exports = () => StoreSetting;
