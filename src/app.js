const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const middlewares = require("./middlewares");
const api = require("./api/routes");
// connect to mongodb
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Backend Services Up And Running",
    });
});

app.use("/api/", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
