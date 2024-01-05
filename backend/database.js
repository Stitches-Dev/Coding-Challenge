const dotenv = require ("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mariadb",
    dialectOptions: {
      logging: false,
      dateStrings: true,
      typeCast: true,
    },
    define: {
      charset: "utf8",
      dialectOptions: { logging: false, collate: "utf8_general_ci" },
    },
    logging: false,
  },
};
