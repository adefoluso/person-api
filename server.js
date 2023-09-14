const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();
const path = require("path");
const {testDbConnection} = require("./utils/database/connection")
const cron = require("node-cron");

const { PORT } = require("./database/config/serverConfig");

const routes = require("./routes/index");

const setupAndStartServer = async () => {
   try {
     await testDbConnection();
   } catch (error) {
     console.error("Unable to connect to the database:", error);
     process.exit(1);
   }

   app.use(bodyParser.json());
   app.use(logger("dev"));
   app.use(express.json());

   app.use(bodyParser.urlencoded({ extended: true }));

   app.use("/api", routes);
   app.listen(PORT, () => {
     console.log(`Server started on port ${PORT}`);
   });

  cron.schedule("*/2 * * * *", () => {
    console.log("Server pinged every 2 minutes.");
  });
};

setupAndStartServer();
