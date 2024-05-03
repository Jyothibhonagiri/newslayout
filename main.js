let increment =0;
let element = document.getElementById("message");
let proginterval = setInterval(function(){
    if(increment===100){
        increment=0
    }else{
        increment=increment+10
        element.style.width=increment+'%';
    }
},1000)
