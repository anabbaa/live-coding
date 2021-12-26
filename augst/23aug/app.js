const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());
const mongoose = require("mongoose");


const DB_URL = process.env.DB_URL; // this is database url

mongoose
  .connect(DB_URL, { useNewUrlParser: true ,  useUnifiedTopology: true  } )
  .then(console.log("DB is connected 😎"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });
  // DB_URL=mongodb://localhost:27017/employees mongo is a protcol only for database




const employees = require("./router/employees");
app.use("/employees", employees);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to our app");
});

module.exports = app;
