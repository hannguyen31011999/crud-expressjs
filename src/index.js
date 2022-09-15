const express = require("express");
const morgan = require("morgan");
const route = require("./routes");
const mongoose = require("./config/database");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();
const port = 8000;

// connect db
mongoose.connectMongoose();

// set default file static
app.use(express.static(path.join(__dirname, "public")));
// set middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
// set body parse json
app.use(express.json());
// set morgan show log
app.use(morgan("combined"));
// set template engine
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
  })
);
// set extend file template engine
app.set("view engine", ".hbs");
// set directory folder view
app.set("views", path.join(__dirname, "resources/views"));

route(app);

app.listen(port, () => {});
