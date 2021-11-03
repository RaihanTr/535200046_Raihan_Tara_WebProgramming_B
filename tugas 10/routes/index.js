const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  // check user session
  if (!req.session.user) {
    res.redirect("/auth/login");
  } else {
    res.send("ok");
  }
});

module.exports = router;