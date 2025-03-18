let _p = document.createElement("p");
_p.innerText = "Hey I am red!";

let body = document.querySelector("body");
body.append(_p);

let _h3 = document.createElement("h3");
_h3.innerText = "I am blue h3 ";
body.append(_h3);

let _div = document.createElement("div");
_div.style.backgroundColor = "pink";
_div.style.border = "2px solid black";
body.append(_div);

let _h1 = document.createElement("h1");
let _p2 = document.createElement("p");

_h1.innerText = "I am in div ";
_div.appendChild(_h1);
_p2.innerText = "ME TOO!";
_div.appendChild(_p2);
