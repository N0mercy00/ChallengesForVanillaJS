//import "./styles.css";

const span=document.getElementById("info");
const langeMinimum=0;
let langeMax=10;

const range=document.getElementById("jsRange");


function handleRangeChange(event){
    console.log(event.target.value);
    const rangeOfGame = event.target.value;
    langeMax=rangeOfGame;
}

function init(){
    span.innerHTML=`<h3> Generate a number beween ${langeMinimum} and ${langeMax}</h3>`;
    if(range){
        range.addEventListener("input",handleRangeChange);
        
    }else{
        console.log("range 없따");
    }
}

init();
setInterval(init,100);