const list = document.querySelector(".container ul");
list.addEventListener("click", function(e){

    if(e.target.className == "delete"){
        let sa = e.target.parentElement;
        
console.log(sa);
    }

});