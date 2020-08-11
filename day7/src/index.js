// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput= document.querySelector("input");
const toDoList =document.querySelector(".js-toDoList");
const doneDoList =document.querySelector(".js-doneDoList");
const TODOS_LS = 'toDos';
const DONEDOS_LS='doneDos'
let toDos=[];
const doneDos=[];

/*
function delDoneDos(event){
    const btn = event.target;
    const li = btn.parentNode;
    doneDoList.removeChild(li);
    const cleanDoneDos=doneDos.filter(function(doneDo){
        return doneDo.id!==parseInt(li.id);
    })
    doneDos=cleanDoneDos;
    saveDoneDos();
}
*/

function loadDDD(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const backBtn = document.createElement("button");
    delBtn.innerText = "❌";
    //
    //delBtn.addEventListener("click",delDoneDos);
    //
    backBtn.innerText = "✅";
    const span = document.createElement("span");
    const newId = doneDos.length + 1;
    

        span.innerText =text;
        li.appendChild(span);
        li.appendChild(delBtn);
        li.appendChild(backBtn);
        li.id = newId;
        doneDoList.appendChild(li);
    
        const doneDoObj = {
            text: text,
            id: newId
        };
       
}

function movToDos(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const backBtn = document.createElement("button");
    delBtn.innerText = "❌";
    //
    //delBtn.addEventListener("click",delDoneDos);
    //
    backBtn.innerText = "✅";
    const span = document.createElement("span");
    const newId = doneDos.length + 1;
    const btn = event.target;
    const nli = btn.parentNode;
    /*console.log(btn);
    console.log(nli);
    console.log(nli.id);
    */


        span.innerText = toDos[nli.id-1].text;
        li.appendChild(span);
        li.appendChild(delBtn);
        li.appendChild(backBtn);
        li.id = newId;
        doneDoList.appendChild(li);
    
        const doneDoObj = {
            text: toDos[nli.id-1].text,
            id: newId
        };
        doneDos.push(doneDoObj);
        console.log(doneDos);
       saveDoneDos();
}



function delToDos(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos=toDos.filter(function(toDo){
        return toDo.id!==parseInt(li.id);
    })
    toDos=cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}
function saveDoneDos(){
    localStorage.setItem(DONEDOS_LS,JSON.stringify(doneDos));
}


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn=document.createElement("button");
    const movBtn=document.createElement("button");
    delBtn.innerText="❌";
    delBtn.addEventListener("click",delToDos);
    movBtn.innerText="✅";
    movBtn.addEventListener("click",movToDos);
    const span =document.createElement("span");
    const newId=toDos.length+1;
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(movBtn);
    li.id=newId;
    toDoList.appendChild(li);

    const toDoObj={
        text:text,
        id:newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedtoDos=localStorage.getItem(TODOS_LS);
    if(loadedtoDos!==null){
        const parsedToDos=JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function loaddoneDos(){
    const loadeddoneDos=localStorage.getItem(DONEDOS_LS);
    if(loadeddoneDos!==null){
        const parsedDoneDos=JSON.parse(loadeddoneDos);
        parsedDoneDos.forEach(function(doneDo){
            loadDDD(doneDo.text);
        })
    }
}

function init(){
    loadToDos();
    loaddoneDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();
