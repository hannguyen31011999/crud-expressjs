class ProductController {
  // [GET]
  index(req, res) {
    res.render("./pages/PageProduct");
  }
  detail(req, res) {
    res.render("./pages/PageProductDetail");
  }
}

module.exports = new ProductController();
