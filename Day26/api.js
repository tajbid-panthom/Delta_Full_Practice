let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data.fact))
  .catch((err) => console.log(err));

async function getFact() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.fact);
}
getFact();
