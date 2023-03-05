const loginForm = document.querySelector(".login__form");
const loginInput = document.querySelector(".login__input");
const greeting = document.querySelector(".login__greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden"); // hidden class를 주어서 form을 없앤다.
  const username = loginInput.value; // input을 따로
  localStorage.setItem("username", username); // localStorage에 저장해.
  painGreetings(username); // 인사하는 함수를 실행한다.
}

// loginForm.addEventListener("submit", onLoginSubmit); // 유저가 이름을 입력하면

function painGreetings(username) {
  // 인사하는 함수는 내 이름을 받아서
  greeting.innerText = `Hello ${username}`; // 이런 형식으로 화면에 뿌려줄거야.
  greeting.classList.remove("hidden"); // 원래는 hidden class가 있었는데 없애줘야지.
}

const savedUsername = localStorage.getItem("username"); // localStorage에 내 이름이

if (savedUsername === null) {
  // 없다면?!
  loginForm.classList.remove("hidden"); // hiddenclass를 form에서 없애주고
  loginForm.addEventListener("submit", onLoginSubmit); // 유저가 이름을 입력하면 위 함수가 실행되도록..
} else {
  // 있다면?!
  painGreetings(savedUsername); // 저장하도록!
}
