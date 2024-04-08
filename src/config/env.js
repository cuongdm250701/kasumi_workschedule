const Sequelize = require("sequelize");
require("dotenv").config();
const env = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
};

const input_connection = {
  host: env.host,
  port: env.port,
  dialect: "postgres",
  query: { raw: true },
  pool: {
    max: 30,
    min: 0,
    acquire: 60000,
    idle: 5000,
  },
  define: {
    hooks: true,
  },
  timezone: "+07:00",
};

const sequelize = new Sequelize(
  env.database,
  env.user,
  env.password,
  input_connection
);

module.exports = sequelize;
