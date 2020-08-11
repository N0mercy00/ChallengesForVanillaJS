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
function saveDoneToDos(){
    localStorage.setItem(DONEDOS_LS,JSON.stringify(doneDos));
}


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn=document.createElement("button");
    const movBtn=document.createElement("button");
    delBtn.innerText="❌";
    delBtn.addEventListener("click",delToDos);
    movBtn.innerText="✅";
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

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();
