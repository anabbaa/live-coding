const numbers = (...nums) => {
    console.log(nums[nums.length - 1]);
  };
  numbers(2, 4, 5, 67, 7, 8, 3);
  const printFunThingsToDo = (userName, age, ...arr) => {
    console.log(arr);}
    printFunThingsToDo(
        "Hadi",
        31,
        "Coding",
        "Cooking",
        "Do fun things",
        "Cool draws"
      );
      const howManyArgs = (...args) => args.length;
console.log(howManyArgs(1, false, "hello"));

const createGrid = (size, char) => {
     let grid = [];
     for (let i = 0; i < size; i++) {
       grid.push([]);
       
     }
    return grid;
}
console.log(createGrid(3));
let originalString = "Hi My Name is Hadi, I'm 31 y.";
let str1 = originalString.substring(5);
console.log(str1);
let str2 = originalString.substring(6, 10);
console.log(str2);

let str = "Hadi";
console.log(str[str.length - 1]);
