const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const User = require("./models/User");
const passport = require("passport");
const morgan = require("morgan");
const keys = require("./config/keys");
const LocalStrategy = require("passport-local");

const PORT = process.env.PORT || 5000;

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(passport.initialize());
require("./services/passport")(passport);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI, err => {
  if (err) {
    console.log(err);
  }
});

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
app.use((req, res, next) => {
  next();
});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/listing", require("./routes/listing"));

app.listen(PORT, () => console.log(`LISTENING ON PORT 5000`));
