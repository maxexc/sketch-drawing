const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;

const colors = ["#f26363", "#df63f2", "#6372f2", "#63f2e9", "#63f293"];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("touchstart", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));
  square.addEventListener("touchend", () => removeColor(square));

  board.append(square);
}

// function setTouchColor(e) {
//   const color = getRandomColor();
//   // get the touch element
//   var touch = e.touches[0];

//   // get the DOM element
//   var square = document.elementFromPoint(touch.clientX, touch.clientY);

//   // make sure an element was found - some areas on the page may have no elements
//   if (square) {
//     // interact with the DOM element
//     square.checked = !square.checked;
//   } else e.style.backgroundColor = color;
//   e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// }

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
