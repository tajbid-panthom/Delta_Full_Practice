let input = document.querySelector("#input");
let regButton = document.querySelector(".reg");

let ul = document.createElement("ul");
document.body.appendChild(ul);
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

regButton.addEventListener("click", () => {
  let li = document.createElement("li");
  let del = document.createElement("button");
  let lis = document.querySelectorAll("ul li");
  let len = lis.length + 1;

  del.classList.add("delbtn");

  li.innerText = len + ".  " + input.value;
  del.innerText = "Remove";

  li.style.width = "200px";
  li.style.margin = "5px";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.appendChild(del);
  ul.appendChild(li);
  input.value = "";

  del.addEventListener("click", () => {
    ul.removeChild(li);
    console.log(li);
  });
});
