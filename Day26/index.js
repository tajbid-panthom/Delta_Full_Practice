let h = document.querySelector("h1");

function color(color, delay) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      h.style.color = color;
      resolve();
    }, delay);
  });
}

async function changeColor() {
  await color("red", 1000);
  await color("green", 1000);
  await color("blue", 1000);
}
changeColor();
