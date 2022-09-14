class HomeController {
  // [GET]
  index(req, res) {
    res.render("./pages/pageHome");
  }
}

module.exports = new HomeController();
