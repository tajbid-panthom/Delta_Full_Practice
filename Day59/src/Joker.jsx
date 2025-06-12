import React, { useEffect, useState } from "react";

const Joker = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  const [joke, setJoke] = useState({});
  const getJokes = async () => {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setJoke({ setup: data.setup, punchline: data.punchline });
  };
  useEffect(() => {
    const getJokes = async () => {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setJoke({ setup: data.setup, punchline: data.punchline });
    };
    getJokes();
  }, []);
  return (
    <div>
      <h1>Joker!</h1>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getJokes}>New Jokes</button>
    </div>
  );
};

export default Joker;
