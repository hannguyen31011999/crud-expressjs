const homeRoute = require("./home");
const productRoute = require("./product");

function route(app) {
  app.use("/products", productRoute);
  app.use("/", homeRoute);
}

module.exports = route;
