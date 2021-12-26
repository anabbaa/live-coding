function multiply (){
    let resulttext = "";
    let usernum = document.querySelector("#num").value;
    console.log(usernum);
  
    for (let i=1; i<= 10; i++){
resulttext += '${i} * ${usernum} = ${i * usernum}';

    }
document.querySelector(".result").innerHTML = resulttext;
};
