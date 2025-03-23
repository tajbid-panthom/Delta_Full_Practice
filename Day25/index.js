let tajbid = document.getElementById("tajbid");

function color(color) {
  return new Promise((res, _) => {
    setTimeout(() => {
      res(color);
    }, 2000);
  });
}

color("red")
  .then((res) => {
    tajbid.style.color = res;
    return color("green");
  })
  .then((res) => {
    tajbid.style.color = res;
    return color("blue");
  })
  .then((res) => {
    tajbid.style.color = res;
    return color("yellow");
  });
