const express = require("express");
const dbConnection = require("./db/config");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { join } = require("path");

const { PORT = 3005, HOST = "localhost" } = process.env;

app.use(cors());

app.use(express.json());

dbConnection();

app.use(express.static(join(__dirname, "../client/dist")));

app.get("/api/test", (req, res) => {
   res.json("App running");
});

app.use("/api", require("./routes/users"));

app.get("*", (req, res) => {
   res.sendFile(join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, HOST, () => console.log(`server running at http://${HOST}:${PORT}`));
