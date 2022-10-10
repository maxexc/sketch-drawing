window.addEventListener("resize", InitApp); //При растягивании окна приложение будет инициализироваться заново

function InitApp() {
  //Растягиваем холст на весь экран
  canvas.width = window.innerWidth; // * 0.9;
  canvas.height = window.innerHeight; // * 0.9;
}

btnClearRef = document.querySelector(".js-clear-btn");
btnClearRef.addEventListener("click", onClickLink);
console.log(btnClearRef);

//Получение холста и его контекста
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d"); // context

canvas.addEventListener("touchmove", function (e) {
  TouchMove(e);
}); //Движение пальцем по экрану
// canvas.addEventListener("mousemove", function (e) {
//   MouseMove(e);
// });

var drawMouse = false;
var mouse = { x: 0, y: 0 };
var color = "#ff0000";

canvas.addEventListener("mousedown", function (e) {
  btnClearRef.removeAttribute("disabled");

  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  drawMouse = true;
  context.beginPath();
  // context.fillStyle = color;
  context.strokeStyle = color;
  context.lineWidth = 2.0;
  context.setLineDash;
  // context.lineJoin = round;
  console.log(context.setLineDash);
  context.moveTo(mouse.x, mouse.y);
});

canvas.addEventListener("mousemove", function (e) {
  if (drawMouse == true) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
  }
  btnClearRef.removeAttribute("disabled");
});

canvas.addEventListener("mouseup", function (e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  context.lineTo(mouse.x, mouse.y);
  context.stroke();
  context.closePath();
  drawMouse = false;
});

canvas.addEventListener("touchstart", function (e) {
  btnClearRef.removeAttribute("disabled");
}); //Начало касания

function TouchMove(e) {
  //Получаем новую позицию
  touchPosition = {
    x: e.changedTouches[0].clientX,
    y: e.changedTouches[0].clientY,
  };
  Draw(touchPosition.x, touchPosition.y, 4); //Рисуем точку текущей позиции
  btnClearRef.removeAttribute("disabled");
}

function Draw(x, y, weight, color = "#ff0000") {
  //Функция рисования точки
  context.fillStyle = color;
  // context.lineWidth = 20;
  // console.log(context);

  let weightHalf = weight / 2; // / 1;

  context.fillRect(x - weightHalf, y - weightHalf, weight, weight);
}

function onClickLink(e) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  btnClearRef.setAttribute("disabled", true);
  // refs.startBtn.removeAttribute("disabled");
}
