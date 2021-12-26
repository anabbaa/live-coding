//accesing name.act or oblect["act"[
  //newobject = {} const save = new Object();
  //let keysArr = Object.keys(person)
  const newPersonObject = {};

  Object.defineProperty(newPersonObject, "bike", {
    value: 22,
    writable: false,
  });
  console.log(newPersonObject.bike);

  Object.defineProperties(newPersonObject, {
    p1: {
      value: "cool",
      writable: true,
    },
    p2: {
      value: "nice",
      writable: false,
    },
    p3: {
      value: 102,
      writable: false,
    },
  });
  console.log(newPersonObject.p1);


const objectToArray = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};

  delete objectToArray.cats;
console.log(objectToArray);

const objectUserInfo = {
  userName: "Zain",
  age: 22,
};
console.log(objectUserInfo.hasOwnProperty("age"));
Object.seal(objectUserInfo);

const factorial = (num) => {
  //console.log(num);
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
console.log(factorial(6));

const obj3 = { kids: 2, cars: 400 };
const obj4 = { colors: ["Red", "Grey", "Black"], pet: "fish" };
const totalObjects = Object.assign({ name: "Hadi" }, obj3, obj4);
console.log(totalObjects);//entries

let time = new Date();
console.log(time);

const binary = (num) => num.toString(2);

console.log(binary(10));
const binary2 = (num) => {
  return parseInt(num, 2);
};
console.log(binary2(10));

//const newCloneArr = [].concat(names);//copy
// trim take all the empty spaces trimend , trimstart
let text = "Hej, it's ME";
console.log(text.startsWith("we"));//endwith
// charAt()
let chr = "Ü";
console.log(chr.charAt(0)); // == console.log(chr[0]);
console.log(chr[0]);// for mor characters use slice

const createGrid = (size, char) => {

  const newArr = new Array(size).fill(new Array(size));


return newArr;
};
console.log(createGrid(3, "*"));
