// import express from "express";
const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/render", (req, res) => {
  res.render("index.ejs");
});
app.get("/rolldice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6 + 1);
  res.render("rolldice", { diceValue });
});
// app.get("/ig/:username", (req, res) => {
//   const followers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
//   let { username } = req.params;
//   res.render("ig", { username, followers });
// });
app.get("/ig/:username", (req, res) => {
  const instaData = require("./data.json");
  // console.log(instaData);
  let { username } = req.params;
  let data = instaData[username];
  if (data) {
    res.render("ig", { data });
  } else {
    res.render("error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
