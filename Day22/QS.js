let body = document.querySelector("body");

let _input = document.createElement("input");
_input.placeholder = "Enter your name";
let _btn = document.createElement("button");
_btn.innerText = "Click me";
_btn.id = "btn";

body.append(_input);
body.append(_btn);

_btn.classList.add("blue");
