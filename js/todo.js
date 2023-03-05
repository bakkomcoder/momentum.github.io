const toDoForm = document.querySelector(".todo form");
const toDoInput = document.querySelector(".todo__input");
const toDoList = document.querySelector(".todo__list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((potato) => potato.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;
  //   console.log(newTodo.text);

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 유저가 todo를 입력하면 그 값을 newTodo에 준다.
  toDoInput.value = ""; // input 칸은 다시 비워줘야지.
  const newTodoObj = {
    // 유저가 입력한 값은 id를 부여하기 위해 object로.
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // object를 빈 array에 넣어주고
  paintToDo(newTodoObj); // 유저가 입력한 값은 화면에 뿌려준다.
  saveToDos(); // localStorage에 저장도 해야지!
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
