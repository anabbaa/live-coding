const args = process.argv.slice(2);

console.log(args);

function letters (str){
    let result= "";
let newstr= str.toLowecase();
for (let i = 0; i < newstr.length; i++) {
result += newstr[i][0].toupercase() + newstr[i](1);

}
return result;


}
console.log(letters("ddd"));
