const btn = document.querySelector("#btn");
const box = document.querySelector(".box");
btn.addEventListener("click", function () {
  box.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
});
let random = () => Math.floor(Math.random() * 255) + 1;
