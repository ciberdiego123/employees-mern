const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const routesRecord = require("./routes/record");
app.use(routesRecord);
const dbo = require("./db/conn");
app.listen(port, () => {
  dbo.connectToServer();
});
