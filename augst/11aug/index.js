require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
// app.use(logger);

app.get("/", (req, res)=>{
    // console.log(req);
    res.send("<h1> hi there <h1>")
});

app.get("/about", (req, res) => {
    res.send("<h2>We are the coolest pp</h2>");
  });

  app.post("/login", (req, res)=>{
    const userName = req.body.userName;
    const pass = req.body.pass;
    if (userName === "Hadi" && pass === "000callme000") {
      res.status(200).send(`Welcome ${userName}`);
    } else {
      res.status(401).send("invalid username or pass");
    }
  });

  app.get("/api", (req, res) => {
    res.status(200).json({ id: 1, cityName: "Berlin", country: "DE" });
  });

app.get("/user",  (req, res) => {
     console.log(req.query);
 const username = req.query.name;
    res.send(`<h2>Hey ${username} </h2>`);
  });
  










const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{

  console.log(`Server is listen on http://localhost:${PORT}`);
}) 