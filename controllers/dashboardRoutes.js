const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("home", {
    layout: "dashboard"
  });
});





module.exports = router;