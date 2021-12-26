// console.log(process);
//  console.log(process.argv);

// process.argv.forEach((item, i) => {
//        console.log(`${i} : ${item}`);
//      });

     const fs = require("fs");
const { argv } = require("process");
     fs.readFile("./longText.txt", "utf8", function(err, data){
         // the second parameter can come from anywhere
         if (err) throw err;
         console.log(data);
     })

     fs.writeFile("./new.txt", "this is new ", (err)=>{
         //another time it will rewrite
        if (err) throw err;
        console.log("Done ✅ ");
     })

     fs.appendFile("newText.txt", "i am new append", (err)=>{
         //create new file
        if (err) throw err;
        console.log("File is done");
     })
     const data = fs.readFileSync("./new.txt")
    
     console.log(data.toString());
console.log("reading sync Done ✅");

fs.rename("new.txt", "newr.txt", (err)=>{
    if (err) throw err;
   console.log("Rename done ✅");
})

fs.open("newText.txt", "w", (err, data) => {
    if (err) throw err;
    console.log("File is opened, Done ✅");
    fs.appendFile("./newTxt.txt", "ahmed", (err)=>{
        if (err) throw err;
        console.log(" done ✅");

    })
  });




    //  let stars = args[0];
    //  let header = args[1];
    //  const print = require("./stars");
    //  print(1, header);
     function sum(numArray) {
        return numArray.reduce((sum, n) => sum + n, 0);
      }
     
      function avg(numArray) {
        return sum(numArray) / numArray.length;
      }
      function mal(num){
        return num.reduce((n,x)=> x * n);


         
      };
      function div(num){
        return num.reduce((n,x)=> n / x);
    }
    
      
      function parsNum(arg) {
        const number = parseFloat(arg);
        if (isNaN(number)) {
          console.log(`Sorry, ${arg} is not a number, Please try again.`);
          process.exit();
        }
        return number;
      }
      const args = process.argv.slice(2);
      const [operation, ...rest] = args;
      const numbers = rest.map(parsNum);
      // sum 2 4 f
      // avg 33 5 3 2 55
    
      
      function med(numArray) {
        switch (operation) {
          case "sum":
            console.log(sum(numArray));
            break;
          case "avg":
            console.log(avg(numArray));
            break;
            case "mal":
                console.log(mal(numArray));
                break;
                case "div":
                    console.log(div(numArray));
                    break;
          default:
            console.log("I can not do this task yet, please write sum or avg");
        }
      }
      med(numbers);