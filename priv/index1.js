let text = "Hej, it's ME";
console.log(text.startsWith("we"));
console.log(text.startsWith("Hej"));
let chr = "Ühay";
console.log(chr.charAt(0));

const userObj = {
    name: "Nancy",
    lastName: "Sad",
    age: 33,
    add: "xxx str",
    act: ["draw", "sleep", "eat"],
    fat: true,
  };
  for (let prop in userObj) {
    console.log(`${prop} : ${userObj[prop]}`);
  }

  const person = {
    name: "Hadi",
    age: 31,
    birthYear: 1989,
    gender: "Male",
    hight: 176,
    print: function () {
      console.log(
        `I am ${this.name}, my age is ${this.age} I was born in ${this.birthYear}`
      );
    }}
    person.print();
    let keysArr = Object.keys(person);
console.log(keysArr);

for (let prop in userObj) {
    console.log(`${prop} : ${userObj[prop]}`);
  }
  //prop grab  first prop is only property but if want to assign valuse i 
  //will type the second one

  let keysArr1 = Object.keys(person);
console.log(keysArr1);

//preserved key to declare vriable assign initalize ....with the value
// access oblect call method passing paremeter
//i += 2 add by two
// ivrement should be in the end when it is before console it will ihnore ftirst round
// when i will add += i will have initalize value
//question
let drawShape = "";
for (let i = 0; i <= 4; i++) {
  drawShape = "";
  for (let j = 0; j <= i; j++) {
    // +++
    drawShape += "+";
  }
  console.log(drawShape);
  //
}

const names1 = ["Zain", "Olga", "Nancy"];
const workOrHa = ["WebDev", "Sleep", "Eat"];
for (let i = 0; i < names1.length; i++) {
  console.log(`hi I am ${names1[i]}, I will be ${workOrHa[i]} `);
}

var myArray = [];

// Only change code below this line
var i = 6;
while( i > 0){
myArray.push(i);
i--;
   console.log(i);

}

var arr = [
    [1,2], [3,4], [5,6]
  ];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }}

    
    const names2 = ["Zain", "Olga", "Nancy"];
    console.log(names2[1]);
    let number1 = 1;
    //
    console.log(names2[number1]); // console.log(names[1])
    number1++; // 2
    console.log(names2[number1]);

    const person2 = {
      name: "Hadi",
      age: 31,
      city: "Berlin",
    };

    function fun(num, { name }) {
      console.log(num);
      let firstName = { name };
      //we should assign parmeter with new variable
      console.log(firstName);

    }
    fun(2, { name: "Hadi", age: 22,});
  