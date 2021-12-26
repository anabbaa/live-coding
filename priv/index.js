let str = "20.4";
let strIntoNum = parseInt(str, 10);
console.log(strIntoNum);
let floatNum1 = 0.1;
let floatNum2 = 0.2;
let result = floatNum1 * floatNum2;
console.log(result);
// toFixed() its to fic decimal
let num = 4;
console.log(result.toFixed(num));
console.log(Math.min(-1, 0, 1, 2, 3, 4));
function roundUp(num) {
    let result = Math.ceil(num);
    console.log(result);
  }
  roundUp(3321.32321);
  // and &&
// true && false => false
// false && true => false
// false && false => false
// true && true => true
//  or ||
// true || false => true
// false || true => true
// false || false => false
// true || true => true
// 1 = true
// 0 = false
// ""= false
// " " , "H" = true
// true = true
// false = false
// 0 1 bit
// 0000 4 bit
// 0001
// 32 bit
//0000 0000 0000 0000 0000 0000 0000
const funThingsToDo = ["eat", "sleep", "repeat"];
 
 let i = 0;
 console.log(funThingsToDo[i]);
 i++;
  console.log(funThingsToDo[i]);
  i++;
 console.log(funThingsToDo[i]);
 const longArr = ["Hi I am, Coo to see you in.", "Hi I am"];
console.log(longArr.length);
const names = ["hadi", "nancy"];
console.log(names[0][0]);
//first zero to the index hadi second zero to index h
 // \' \"  ignore
  // \n new line
  text = "";
for (let i = 0; i <= 10; i += 2) {
  text += i + " ";
}
console.log(text);
// 9 8 7 6 5 4 3 2 1 0
text = "";
for (let i = 9; i >= 0; i--) {
  text += i + " ";
}
console.log(text);
text = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j < 8; j++) {
    text += i + " ";
  }
}
console.log(text);
text =0;
for (let i = 1; i <= 4;i++){
    text += i;
};
console.log(text);

text = "";
for (let i = 1; i <= 4;i++){
    text += i + "";
}
let str1 = "This is a long.";
console.log(str1[5]);//start frm zero
const names1 = ["Zain", "Olga", "Nancy"];
console.log(names1[1]);
let number1 = 1;
//
console.log(names1[number1]); // console.log(names[1])
for (let i = 0; i <= 6;) {
  console.log(i);
  i++;
};
for (let i = 1; i <= 10; i++) {
  console.log(`this is Multi table for ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j}  = ${i * j}`);

  }
  console.log("-------");//every ruound will print it 
};
const arrayToStr = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i] + " "// this space to add space between words
  }

  return str;
};
const names2 = ["Zain", "Nancy", "Olga"];
//.length
// to get the number of elements in an array
console.log(names2.length);
let pos = names2.indexOf("Nancy");
// console.log(typeof pos);
let n = 0;
// // .splice()
// // remove an item by the index number
let removedItemFromIndex = names2.splice(pos, n);
console.log(pos);
const arr1 = []; // 1st way
const arr3 = new Array();//is a way
let newArr = Array.of(1, 44, 55, 6);
const daa = new Array;
  console.log(daa);
  console.log(Array.isArray(daa));
  // fill if i put one number it will add to the end of the array
  let arr5 = [22, 34, 6, 7, 4, 4, 3];
  // let newArr5 = arr5.fill(101, 1,4);
  let newArr5 = arr5.fill(101, 3);
  console.log(newArr5);
  //fill is to complete an array begin with number of index and end with 
  //number of index
  //
  let counter =0;
  do {
console.log(counter);
counter ++
  } while (counter <=  10);  
  //if we print out side we have the complete result
  //if we have counter++ befor exceute then we will counter the conole
  //so we will have till 11
  let loopOne=0;
  while (loopOne < 5) {
    loopOne++;
    console.log(loopOne);
  }
  
/

const twoFor = (who = "you") => `Two for me and one for ${who}`;
//when i declare who this when i dont pass any value
console.log(twoFor("Zain"));
console.log(twoFor());

const numbers = (...nums) => {
  console.log(nums[nums.length - 1]);
};

numbers(2, 4, 5, 67, 7, 8, 3);

const coolNumbers = [1, 2, 7, 43, 5, 6];
const biggerThanFive = coolNumbers.find((num) => num >7);
console.log(biggerThanFive);

function main(num1, num2) {
  // outer function
  function second(n) {
    // inner function
    return n * n;
  } //      9 multpiy by itself      +       16        = 25
  return second(num1) + second(num2);
}

console.log(main(3, 4));

let nice = true;
const outerFunction = (x, y) => {
  let big = true;
  console.log(big + " outerFunction");
  const innerFunction = (num) => {
    big = false;
    nice = false;
    let fat = true;
    console.log(`innerFunction : big =  ${big}, nice = ${nice}`);
    return num + 10;
  };
  // console.log(fat);
  //            13        +      14  =    27
  return innerFunction(x) + innerFunction(y);
};
console.log(outerFunction(3, 4));

//want explanation
  let TBox = "";
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i == j) {
      break;
    } else {
      TBox += "T";
      console.log(TBox);
    }
  }
};

const passwordGen = () => {
  let characters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    6,
    7,
    8,
    9,
    "!",
    "§",
    "$",
    "%",
    "&",
    "?",
    "@",
    "€",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result = "";
  let randomNum;

  for (let i = 0; i <= 30; i++) {
    randomNum = Math.floor(Math.random() * characters.length);
    // result = result + characters[randomNum];
    result += characters[randomNum];
  }
  return result;
};

// console.log(passwordGen());
// other way
let numbers = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
let alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let charactersSp = ["!", "§", "$", "%", "&", "?", "@", "€"];
const passGen = () => {
  let result = "";
  const randomNumGetter = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };
  for (let i = 0; i <= 17; i++) {
    if (i % 2 == 0) {
      result += numbers[randomNumGetter(numbers)];
    }
    // some other if
    if (i % 3 == 0) {
      result += alpha[randomNumGetter(alpha)].toUpperCase();
    } else {
      result += alpha[randomNumGetter(alpha)];
    }
    // some other if
    if (i % 5 == 0) {
      result += charactersSp[randomNumGetter(charactersSp)];
    }
  }
  return result;
};
//???????????
console.log(passGen());

const numbersCount = () => {
  let text;
  //           4>=0
  for (let i = 5; i >= 0; i--) {
    // something
    // i = 3
    text = "";
    // text = ""
    //                5<=4
    for (let j = 1; j <= i; j++) {
      // j= 5
      // something
      text += j;
      // "123"+ 4
    }
    // something
    console.log(text);
    // "1234"
  }
};

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