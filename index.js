window.addEventListener("resize", InitApp); //При растягивании окна приложение будет инициализироваться заново

function InitApp() {
  //Растягиваем холст на весь экран
  canvas.width = window.innerWidth; // * 0.9;
  canvas.height = window.innerHeight; // * 0.9;
}

btnClearRef = document.querySelector(".js-clear-btn");
btnClearRef.addEventListener("click", onClickLink);
console.log(btnClearRef);
removeNotice = document.querySelector(".js-notice");
console.log(removeNotice);
colorBtn = document.querySelector(".js-colorBtn-list");

colorBtn.addEventListener("click", colorForTouch);

//Получение холста и его контекста
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d"); // context

// меняем фон / change background

changeBackGround = document.querySelector(".changeBack");
changeBackGround.addEventListener("click", changeImg);

var colorArray = [
  "url('./img/t_49.png')",
  "url('./img/modern.jpg')",
  "url('./img/t_43.jpg')",
  "url('./img/t_23.jpg')",
  "url('./img/t_52.jpg')",
  "url('./img/t_72.jpg')",
  "url('./img/t_1.jpg')",
  "url('./img/t_3.jpg')",
  "url('./img/t_4.jpg')",
  "url('./img/t_5.jpg')",
  "url('./img/t_9.jpg')",
  "url('./img/t_37.jpg')",
  "url('./img/t_45.jpg')",
  "url('./img/t_67.jpg')",
];
var i = 0;
console.log(canvas.style.backgroundImage);

function changeImg() {
  canvas.style.backgroundImage = colorArray[i];
  // document.body.style.backgroundImage = "url('t.png')"; //Если файл в корне, если путь другой, укажите путь перед t.png
  i++;
  if (i >= colorArray.length) {
    i = 0;
  }
}

var draw = false;
var mouse = { x: 0, y: 0 };
var touchPosition = { x: 0, y: 0 };
var color = "#fffc56";
var shadowColor = "rgba(255, 252, 86, 0.745)";

function colorForTouch(e) {
  console.log(e.target);
  if (!e.target.classList.contains("colorBtn-list__item")) {
    return;
  }

  const swatchEl = e.target;
  color = swatchEl.dataset.hex;
  shadowColor = swatchEl.dataset.rgb;
  console.log(swatchEl.dataset.hex);
  console.log(swatchEl.dataset.rgb);
}

canvas.addEventListener("mousedown", function (e) {
  btnClearRef.removeAttribute("disabled");
  removeNotice.classList.add("notice-opacity");
  setTimeout(() => removeNotice.classList.add("notice-hidden"), 1000);

  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  draw = true;
  context.beginPath();
  // context.fillStyle = color;
  context.strokeStyle = color;
  context.lineWidth = 2.0;

  // context.setLineDash;
  // context.lineJoin = round;

  // console.log(context);
  context.shadowBlur = 5;
  context.shadowColor = shadowColor;
  // color: rgba(233, 95, 95, 0.226);

  context.moveTo(mouse.x, mouse.y);
});

canvas.addEventListener("mousemove", function (e) {
  if (draw == true) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
    // console.log(context.stroke);
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
  e.preventDefault();
  touchPosition.x = e.changedTouches[0].clientX - this.offsetLeft;
  touchPosition.y = e.changedTouches[0].clientY - this.offsetTop;
  draw = true;
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = 2.0;
  context.shadowBlur = 5;
  context.shadowColor = shadowColor;
  context.moveTo(touchPosition.x, touchPosition.y);
  btnClearRef.removeAttribute("disabled");
  removeNotice.classList.add("notice-opacity");
  setTimeout(() => removeNotice.classList.add("notice-hidden"), 1000);
}); //Начало касания

canvas.addEventListener("touchmove", function (e) {
  e.preventDefault();
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
