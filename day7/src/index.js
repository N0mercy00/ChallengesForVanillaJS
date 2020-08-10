// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput= document.querySelector("input");
const toDoList =document.querySelector(".js-toDoList");
const TODOS_LS = 'toDos';

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn=document.createElement("button");
    const movBtn=document.createElement("button");
    delBtn.innerText="❌";
    movBtn.innerText="✅";
    const span =document.createElement("span");
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(movBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const toDos=localStorage.getItem();
    if(toDos!==null){

    }
}

function init(){
    //loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();
