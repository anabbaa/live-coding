for (let i = 0; i < 5; i++) {
    if (i <= 1) {
      console.log(`there is ${i} star in the sky`);
    } else {
      console.log(`there are ${i} stars in the sky`);
    }
  };
  //plural
  const names = ["Zain", "Olga", "Nancy"];
const workOrHa = ["WebDev", "Sleep", "Eat"];
for (let i = 0; i < names.length; i++) {
  console.log(`hi I am ${names[i]}, I will be ${workOrHa[i]} `);
}
const arrayToStr = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    
    if (i == arr.length - 1) {
      
    } else {
      str += ", ";
    }
  }
  return str;
};
console.log(arrayToStr(["Berlin", "Paris", "Prague", "Rome"]));
const findGreatest = (arr, num) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }
  return result.join(", ");
};
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
}
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i == 4) {
    break;
  }
}
for (let i = 1; i <= 10; i++) {
  if (i == 4) {
    continue;
  } else {
    console.log(i);
  }
}
const arr1 = [2, 2, 2, 3, 3, 44, 55, 44, 55];
const cleanUp = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(cleanUp(arr1));
let counter = 1;
do {
  console.log(`counter is now at ${counter}`);
  //arr5.push("Hi");
  counter++;
} while (counter <= 10);
let loopOne = 0;
while (loopOne < 5) {
  console.log(loopOne);

  loopOne++;};

  for (i=0; i<= 5; i++){
    console.log("+".repeat(i));}

    for (i=0; i<= 5; i++){
      for (j=0; j<= 4; j++){
        console.log("+".repeat(j));
      }
    }
    let box; // box is ready
for (let i = 0; i <= 5; i++) {
  // i = 2
  box = ""; // box is empty now
  for (let j = 0; j < i; j++) {
    // j = 3
    box += "+"; // box=  +
  }
  console.log(box); // ++
}









