const Product = require("../models/Products");
const { mutipleMongooseToObject } = require("../../utils/mongoose");

class ProductController {
  // [GET]
  async index(req, res, next) {
    Product.find({})
      .then((products) => {
        res.render("./pages/PageProduct", {
          products: mutipleMongooseToObject(products),
        });
      })
      .catch(next);
  }
  detail(req, res) {
    res.render("./pages/PageProductDetail");
  }
}

module.exports = new ProductController();
