const names = ["Zain", "Olga", "Nancy"];
const cities = ["Berlin", "Paris"];
const newArr = names.map((name, i) => {
  if (name == "Nancy") {
    console.log("I don't Like you");
  }
  console.log(`this ${name} has index ${i}`);
});
