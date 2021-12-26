const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const jsonFile = new FileSync("db.json");
const db = low(jsonFile);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to our lowdb app");
  });

  app.get("/new", async (req, res) => {
    await db.defaults({articles:[], user:[], num:1}).write();
    res.send("New db being init");
  });

  app.get("/add", async (req, res) => {
    const id = req.query.id;
    const title = req.query.title;
    db.get("articles").push({id:id, title:title}).write();
    res.send(`New data being entered id:${id} title${title}:`);
  });

  app.get("/find", async (req, res) => {
    //url  /find?id=1
    const idToFind = req.query.id;
    const result = await db.get("articles").find({ id: idToFind }).value();
    let text = "";
    if (result) {
      text = result;
    } else {
      text = "sorry, not found";
    }
    res.send(text);
  });

  app.get("/update", async (req, res) => {
    //url /update
    await db.update("num", (n) => n + 1).write();
    const num = db.get("num").value();
    res.send(`num was updated, now num is = ${num}`);
  });

  app.get("/user", async (req, res) => {
    const name = req.query.name;
    await db.set("user.name", name).write();
    res.send(`Hey ${name}`);
  });
  
  app.delete("/delete", async (req, res) => {
   
      const title = req.query.title;
      await db.get("articles").remove({ title: title }).write();
      res.status(200).send(`Your ${title} has been removed`);
  });








  app.listen(PORT, () => {
    console.log(`server listen on http://localhost:${PORT}`);
  });
  