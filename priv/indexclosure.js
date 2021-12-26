function main(num1, num2) {
    // outer function
    function second(n) {
      // inner function
      return n * n;
    } //      9       +       16        = 25
    return second(num1) + second(num2);
  };
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
const add = (() => {
    let counter = 0;//this closure this is self invoking
  
    return () => { //then every time i call the functon will executes this 
      counter++;
      return counter;
    };
  })();
  //call backfunction
  function first(cb) {
    const funFunction = () => "Noooo";
    return cb;
  }
  function cb() {
    return "fun";
  }
  
  console.log(first(cb()));

  const factorial = (num) => {
    //console.log(num);
    if (num == 1) {
      return 1;
    }
    return num * factorial(num - 1);
  };
  console.log(factorial(7));

  

  