let btnn = document.createElement("button");
btnn.innerHTML = "Click me";
document.body.appendChild(btnn);
btnn.addEventListener("click", () => {
  btnn.style.backgroundColor = "green";
});

let input = document.createElement("input");
let h2 = document.createElement("h2");
input.placeholder = "Enter your name";
document.body.appendChild(h2);
document.body.appendChild(input);
input.addEventListener("input", () => {
  h2.innerText = input.value;
});
