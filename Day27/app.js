let btn = document.querySelector("button");
let fact = document.querySelector("#fact");
let img = document.querySelector("img");
btn.addEventListener("click", async () => {
  let data = await getCatFact();
  let i = await getImg();
  fact.innerHTML = data;
  img.setAttribute("src", i);
});
let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

async function getCatFact() {
  let res = await axios.get(url);
  return res.data.fact;
}
async function getImg() {
  let res = await axios.get(url2);
  return res.data.message;
}
