window.addEventListener("resize", InitApp); //При растягивании окна приложение будет инициализироваться заново

function InitApp() {
  //Растягиваем холст на весь экран
  canvas.width = window.innerWidth * 0.9;
  canvas.height = window.innerHeight * 0.9;
}

btnClearRef = document.querySelector(".js-clear-btn");
btnClearRef.addEventListener("click", onClickLink);
console.log(btnClearRef);

//Получение холста и его контекста
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.addEventListener("touchmove", function (e) {
  TouchMove(e);
}); //Движение пальцем по экрану
canvas.addEventListener("mousemove", function (e) {
  MouseMove(e);
});

canvas.addEventListener("touchstart", function (e) {
  TouchStart(e);
}); //Начало касания

function TouchStart(e) {
  //Получаем текущую позицию касания
  touchStart = {
    x: e.changedTouches[0].clientX,
    y: e.changedTouches[0].clientY,
  };
  touchPosition = { x: touchStart.x, y: touchStart.y };

  btnClearRef.removeAttribute("disabled");

  Draw(touchPosition.x, touchPosition.y, 2, "blue"); //Рисуем точку начала касания
}

function TouchMove(e) {
  //Получаем новую позицию
  touchPosition = {
    x: e.changedTouches[0].clientX,
    y: e.changedTouches[0].clientY,
  };
  Draw(touchPosition.x, touchPosition.y, 5); //Рисуем точку текущей позиции
  btnClearRef.removeAttribute("disabled");
}
function MouseMove(e) {
  if ("mousedown") {
    touchPosition = {
      x: e.clientX,
      y: e.clientY,
    };
  }
  Draw(touchPosition.x, touchPosition.y, 5); //Рисуем точку текущей позиции
  btnClearRef.removeAttribute("disabled");
}

function Draw(x, y, weight, color = "#ff0000") {
  //Функция рисования точки
  ctx.fillStyle = color;
  ctx.lineWidth = 20;

  let weightHalf = 10 * weight; // / 1;

  ctx.fillRect(x - weightHalf, y - weightHalf, weight, weight);
}

function onClickLink(e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  btnClearRef.setAttribute("disabled", true);
  // refs.startBtn.removeAttribute("disabled");
}
