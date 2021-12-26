let str = "Hadi";
console.log(str[str.length - 1]);
//i accessing my object ....calling method ----passing parmeter
let int1 = "122";
let int2 = "1.5";
let intSum = int1 + int2;
let newNum = parseInt(int1, 10);
//change strin number to numbernparsefloat change decimal
console.log(newNum);
console.log(intSum);
let newFloat = parseFloat(int2);
console.log(newFloat);

let float1 = 1.8;
let realInt = Math.floor(float1);
console.log(realInt)

let floatNum1 = 0.1;
let floatNum2 = 0.2;
let result = floatNum1 * floatNum2;
console.log(result);
// toFixed()
let num = 3;
console.log(result.toFixed(num));
let num1 = 1;
//num1 = num1 + 1; == num1 += 1;
//function1
function sad  (num1, num2){}
//function 2
const print = (str) => {
    console.log(str);}
//functio3
const sum = function (x, y) {
  return x + y;
};
let text = "";
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    // text = text + i + " ";
    text += i + " ";//collect i and add it to text
  }
}
console.log(text);
//if j less than i then every round repeat one from i accoring to the number of j
text = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j < 3; j++) {
    text += i + " ";
  }
}

for (let i = 1; i <= 10; i++) {
    // 1 * 1 = 1
    for (let j = 1; j <= 10; j++) {
      //  console.log(i + "*" + j + "=" + i*j);
      console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("--- new table");
    // something else
  }
  text = "";
for (let i = 1; i <= 3; i++) {
  // i =2 j = 0 add j then add between brackets untill condition broken 
  // repeat it with another loop and so on
  for (let j = 0; j <= 4; j++) {
    // j = 0
    text += j + " ";
  }
}
console.log(text);


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

const lifeStatus = (firstName, age) => {
  let status = "";
  if (age < 13) {
    status = "child";
  } else if (age >= 13 && age < 20) {
    status = "teenager";
  } else if (age >= 20 && age < 30) {
    status = " young adult";
  } else {
    status = "adult";
  }
  return `${firstName} is a ${status}`;
};
let firstName = "Hadi";
let age = 31;

console.log(lifeStatus(firstName, age));
console.log(lifeStatus("Zain", 12));
const arrayToStr = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i == arr.length - 1) {
      str += ".";
    } else {
      str += ", ";
    }
  }
  return str;
};
//let arr3 = arr1.concat(arr2, [22, 4, 555, 44]);

const rep = (item, times) => {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(item);
  }//every loop repeat item 
  return result;
};
// Escaping spatial characters ( \' , \" )
// New line (\n)

(function printMyName(x, y) {// self invoke function
  console.log(`Hi I am cool function ${x + y}`);
})(2, 3);
const twoFor = (who = "you") => `Two for me and one for ${who}`;
const exponent = (num, exp = 2) => num ** exp;
const exponent2 = (num, exp = 2) => Math.pow(num, exp);
const exponent3 = (num, exp = 2) => {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    // 1 = 1 * 3
    // 3 * 3
    result *= num;
  }
  return result;
};
function main(num1, num2) {
  // outer function
  function second(n) {
    // inner function
    return n * n;
  } //      9       +       16        = 25
  return second(num1) + second(num2);
}
const add = (() => {
  let counter = 0;

  return () => {
    counter++;
    return counter;
  };
})();
let counter = 1;
do {
  console.log(`counter is now at ${counter}`);
  counter++;
  //if we put counter before conole will add then print and ver versa if we assign 
  // bigger than 10 it will star t with 1 but no reach 10 if it bigger or equal ten
  // it will start with 2 to ten
} while (counter < 10 );

// while
let loopOne = 0;
while (loopOne < 5) {
  console.log(loopOne);
  loopOne++;
// if we make consoloe outside it it will show only result here 5 if we make conoloe 
//before ++ it will start with 0 and continue according to condition if we make 
//consoloe after ++ it will add so star with 1 the apply condition
}
//split
//split("")fo every charater
//split(" ")space word
// some
const isEven = (item) => item % 2 == 0;
//console.log(numbers.some(isEven));

// every
const isBigger = (item) => item > 55;
//console.log(numbers.every(isBigger));
const words = ["hi", "a", "web", "development"];
const sortedArr = words.sort((a, b) => b.length - a.length);
console.log(sortedArr);




const camel = (str)=>{
  let result ="";
  let newstr = str.toLowerCase().split("_");
for ( let i=1; i< newstr.length; i++){
  newstr[i] += newstr[i][0].toUpperCase() + newstr[i].slice(1);
  
console.log(newstr[i]);
}
}
console.log(camel("hellow_world"));

const geometricalSequence = () => {
  let str = "";
  for (let i = 1; i <= 256; ) {
    
    str += `${i} `;
    i += i;
  
  }
  return str.trim();
};
console.log(geometricalSequence());


