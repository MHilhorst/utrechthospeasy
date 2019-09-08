const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");
const jwtAuth = require("express-jwt");

const secret = keys.secretJWT;

sgMail.setApiKey(keys.sgMailKey);

router.post("/register", (req, res) => {
  User.findOne(
    {
      email: req.body.email
    },
    (err, user) => {
      if (user) {
        res.json({
          error: "User already exists"
        });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => res.status(400).json(err));
            // sgMail.send({
            //   to: user.username,
            //   from: "welkom@hospi.nl",
            //   templateId:"d-4ff6da1efdc7495095429c9e3a2e45be",
            //   dynamic_template_data: {
            //    name: user.firstName,
            //    confirmation: user._id
            //  },
            //  })
          });
        });
      }
    }
  );
});

router.get("/profile", jwtAuth({ secret: secret }), (req, res) => {
  console.log(req.headers);
  if (req.user) {
    const { user } = req;
    res.send({ user });
  } else {
    res.json({ error: "No user logged in" });
  }
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: "No account found" });
      } else {
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
          if (isMatch) {
            const payload = {
              _id: user._id,
              email: user.email
            };
            jwt.sign(payload, secret, { expiresIn: 36000 }, (err, token) => {
              if (err) {
                res
                  .status(500)
                  .json({ error: "Error signing token", raw: err });
              } else {
                res.status(200).json({
                  success: true,
                  token: `Bearer ${token}`,
                  user: user
                });
              }
            });
          } else {
            res.status(400).json({ error: "Password is incorrect" });
          }
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/confirmation/:id", (req, res) => {
  User.findOne({ _id: req.params.id, activated: false }, (err, user) => {
    if (err) {
      res.redirect("/api/auth/");
    } else {
      User.findOneAndUpdate(
        { _id: req.params.id },
        { activated: true },
        { new: true },
        (err, user) => {
          console.log(user);
        }
      );
      res.redirect("/api/auth/");
    }
  });
});

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ test: "hi" });
  }
);

router.post("/logout", jwtAuth({ secret }), (req, res) => {
  if (req.user) {
    req.logout();
    res.status(200).json({ success: "You succesfully logged out" });
  }
});

module.exports = router;
