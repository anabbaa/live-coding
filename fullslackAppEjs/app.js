const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// cookie, session
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");


const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));


// to process the data
app.use(express.json());

app.use(
express.urlencoded({
extended: true,
})
);

app.use(cookieParser());

app.use(
  expressSession({
    secret: "somethingSecret",
    saveUninitialized: false,
    resave: false,
  })
);
// mongoDB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected 😎"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });
// Alow uploads
app.use("/uploads", express.static("uploads"));
// router
const auth = require("./routes/auth");
app.use("/", auth);
const users = require("./routes/users");
app.use("/users", users);
const user = require("./routes/user");
app.use("/user", user);

module.exports = app;
