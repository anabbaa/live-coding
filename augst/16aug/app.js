const express = require("express");
const app = express();
const morgan = require("morgan");
const createError = require("http-errors");
//i create response as an error 
const userRouter = require("./router/users");
const bookRouter = require("./router/books");

app.use(morgan("dev"));// iam intersted only on development part

// Middleware
 app.use((req,res,next) => {
     if (!req.query.userName)
     return next(createError(401, "please rejoin"));//only if true
     next();//i will not sto here

 });

app.use("/admin", (req, res, next) => {
    if (!req.query.userName)
      return next(createError(401, "Please login to see this page."));
    next();
  });
//using route
//if you have general middelware put it before you direct yout page
  app.use("/users", userRouter); //if i have pat users grab userrouter
app.use("/books", bookRouter);

app.use((req, res, next) => {
     const error = new Error("Noooooo this is not cool");
     error.status = 404;
     next(error);// be error in mind it will proceed further next object will know
     //what happend
   });

//nesting
  app
  .get("/", (error, req, res) => {
    console.log("GET");
    res.status(200).json({ text: "This is a GET req" });
  })
  .post("/", (req, res) => {
    console.log("POST");
    res.status(200).json({ text: "This is a POST req" });
  })
  .put("/", (req, res) => {
    console.log("PUT");
    res.status(200).json({text: "this is a put text"});
  })
  .delete("/", (req, res) => {
    console.log("DELETE");
    res.status(200).json({ text: "This is a DELETE req" });
  });

