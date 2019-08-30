const express = require("express");
const keys = require("../config/keys");
const Listing = require("../models/Listing");
const jwtAuth = require("express-jwt");
const router = express.Router();

router.post("/add", jwtAuth({ secret: keys.secretJWT }), (req, res) => {
  if (req.user) {
    const newListing = new Listing({
      address: req.body.address,
      city: req.body.city,
      userID: req.user._id
    });
    newListing
      .save()
      .then(listingObj => {
        res.json({ listingObj });
      })
      .catch(err => console.log(err));
  } else {
    console.log("error");
    res.json({ error: "nothing" });
  }
});

module.exports = router;
