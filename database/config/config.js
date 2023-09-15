require("dotenv").config();

module.exports = {
  development: {
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    dialect: "postgres",
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: "postgres",
  },
  production: {
    host: process.env.PROD_DATABASE_HOST,
    password: process.env.PROD_DATBASE_PASSWORD,
    port: process.env.PROD_DATABASE_PORT,
    username: process.env.PROD_DB_USERNAME,
    database: process.env.PROD_DATABASE,
    dialect: "postgres",
  },
};
