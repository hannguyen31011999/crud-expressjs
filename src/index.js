const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(morgan("combined"));

app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  console.log("params query", req.query);
  res.render("home");
});

app.post("/", (req, res) => {
  console.log("body", req.body);
  res.render("home");
});

app.listen(port, () => {});
