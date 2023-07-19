const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const middlewares = require("./middlewares");
const api = require("./api/routes");
// connect to mongodb
/* This code is establishing a connection to a MongoDB database using Mongoose. */
mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const app = express();

/* `app.use(morgan("dev"))` is a middleware that logs HTTP requests to the console. It is using the
"dev" format, which provides detailed information about each request, such as the HTTP method, URL,
response status, and response time. */
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

/* This code is defining the routes and middleware for the Express application. */
app.get("/", (req, res) => {
    res.json({
        message: "Backend Services Up And Running",
    });
});

/* `app.use("/", api);` is mounting the `api` router middleware on the root path ("/") of the Express
application. This means that any requests that match the root path ("/") will be handled by the
routes defined in the `api` router. */
app.use("/", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
