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

// canvas.addEventListener("touchmove", function (e) {
//   TouchMove(e);
// }); //Движение пальцем по экрану
// canvas.addEventListener("mousemove", function (e) {
//   MouseMove(e);
// });

var draw = false;
var mouse = { x: 0, y: 0 };
var touchPosition = { x: 0, y: 0 };
var color = "#ff0000";

canvas.addEventListener("mousedown", function (e) {
  btnClearRef.removeAttribute("disabled");

  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  draw = true;
  context.beginPath();
  // context.fillStyle = color;
  context.strokeStyle = color;
  context.lineWidth = 2.0;
  // context.setLineDash;
  // context.lineJoin = round;
  console.log(context.setLineDash);
  context.moveTo(mouse.x, mouse.y);
});

canvas.addEventListener("mousemove", function (e) {
  if (draw == true) {
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
  draw = false;
});

canvas.addEventListener("touchstart", function (e) {
  touchPosition.x = e.changedTouches[0].clientX - this.offsetLeft;
  touchPosition.y = e.changedTouches[0].clientY - this.offsetTop;
  draw = true;
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = 2.0;
  context.moveTo(touchPosition.x, touchPosition.y);
  btnClearRef.removeAttribute("disabled");
}); //Начало касания

canvas.addEventListener("touchmove", function (e) {
  if (draw == true) {
    //Получаем новую позицию
    touchPosition.x = e.changedTouches[0].clientX - this.offsetLeft;
    touchPosition.y = e.changedTouches[0].clientY - this.offsetTop;
    // console.log(touchPosition.x);
    // console.log(touchPosition.y);

    context.lineTo(touchPosition.x, touchPosition.y);
    context.stroke();
  }

  btnClearRef.removeAttribute("disabled");
});

canvas.addEventListener("touchend", function (e) {
  touchPosition.x = e.changedTouches[0].clientX - this.offsetLeft;
  touchPosition.y = e.changedTouches[0].clientY - this.offsetTop;
  context.lineTo(touchPosition.x, touchPosition.y);
  context.stroke();
  context.closePath();
  draw = false;
});

function onClickLink(e) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  btnClearRef.setAttribute("disabled", true);
}

// touchPosition = {
//   x: e.changedTouches[0].clientX,
//   y: e.changedTouches[0].clientY,
// };
// Draw(touchPosition.x, touchPosition.y, 4); //Рисуем точку текущей позиции
//
// function Draw(x, y, weight, color = "#ff0000") {
//   //Функция рисования точки
//   context.fillStyle = color;
//   // context.lineWidth = 20;
//   // console.log(context);

//   let weightHalf = weight / 2; // / 1;

//   context.fillRect(x - weightHalf, y - weightHalf, weight, weight);
// }
