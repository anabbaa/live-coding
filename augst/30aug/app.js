const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

const mongoose = require("mongoose");
const faker = require("faker");
const path = require("path");

const FakeModel = require("./model/user");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });

  app.set("view engine", "ejs"); 
  //its enjine to render render need it
  //its set to set values
app.set("views", path.resolve(__dirname, "views"));
//we set our view where we redrirected
// grap the psathe it will take care for the views of my app
// i dont want to confuse'my app where i want to view
app.get("/", (req, res) => {
FakeModel.find((err,data)=>{
  if(err)
{
  console.log(err);
}
else if (data) {
  res.render("home", { data });

}
else{
  res.render("home", { data: {} });

}

});
});

app.post("/",(req,res)=>{
for (let i=0; i> 10; i++){
  const fakedata = new FakeModel({
    firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      city: faker.address.city(),
      avatar: faker.image.avatar(),
  });
  try{
    fakeData.save();
  }
  catch(err){
    console.log(err);

  }
}
res.redirect("/");

});


