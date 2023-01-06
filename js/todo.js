const todoForm = document.querySelector("#todo-form");
const todoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";
function handleDelButton(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(todoText) {
    const li = document.createElement("li");
    li.id = todoText.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = todoText.text;
    button.innerText = "X";
    button.addEventListener("click", handleDelButton);
    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}
function handleToDoSubmit(e) {
    e.preventDefault();
    const todoText = document.querySelector("#todo-form input");

    const newTodoObj = {
        text: todoText.value,
        id: Date.now()
    };
    paintToDo(newTodoObj);
    toDos.push(newTodoObj);
    saveToDos();
    todoText.value = "";
}

function filterToDo(obj) {
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintToDo);
}