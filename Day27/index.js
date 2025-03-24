let uri = "https://icanhazdadjoke.com/";

async function getJoke() {
  const config = { headers: { Accept: "application/json" } };
  let res = await axios.get(uri, config);
  console.log(res.data.joke);
}
getJoke();
