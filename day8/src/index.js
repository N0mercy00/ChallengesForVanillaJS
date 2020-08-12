//import "./styles.css";

const span=document.getElementById("info");
const langeMinimum=0;
let langeMax=100;
const playerChose=document.getElementById("jsPlayer");
const btn=document.querySelector("button");
const ground=document.getElementById("playground");
const result=document.getElementById("result");
const range=document.getElementById("jsRange");
let player=0;
let machine=0;

const spanNew = document.createElement("span");
const resultNew=document.createElement("span");

function simPan(){
    if(player>langeMax){
        resultNew.innerHTML=`you chose bigger than MAX chose again`;
    }else if(player<langeMinimum){
        resultNew.innerHTML=`you chose smaller than MIN chose again`;
    }else if(player>=machine){
        resultNew.innerHTML=`<h4>YOU WIN</h4>`;
    }else if(player<machine){
        resultNew.innerHTML=`<h4>YOU LOSE</h4>`;
    }
    result.appendChild(resultNew);
}

function startMachine(){
    machine=machinePick(langeMinimum,langeMax);
}

function startPlay(){
    player=playerChose.value;
    spanNew.innerHTML=`You chose: ${player}, machine chose:${machine}`;
    ground.appendChild(spanNew);

}

function machinePick(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min;
}

function handleRangeChange(event){
    console.log(event.target.value);
    const rangeOfGame = event.target.value;
    langeMax=rangeOfGame;
}

function changeinfo(){
    span.innerHTML=`<h3> Generate a number beween ${langeMinimum} and ${langeMax}</h3>`;
}

function init(){
    
    if(range){
        range.addEventListener("input",handleRangeChange);
        changeinfo();
        
        btn.addEventListener("click",startMachine);
        btn.addEventListener("click",startPlay);
        btn.addEventListener("click",simPan);
        

        
    }else{
        console.log("range 없따");
    }
}

init();
setInterval(changeinfo,100);