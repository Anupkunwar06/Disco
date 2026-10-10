const body = document.querySelector("body");

let colorStr = "0123456789abcdef";

setInterval(()=>{
    
    let color = ""
    for (let i=0;i<6;i++){
    let randomvalue = Math.floor(Math.random()*colorStr.length)
    color = color + colorStr[randomvalue]
}
body.style.backgroundColor =`${color}`;
},0)

