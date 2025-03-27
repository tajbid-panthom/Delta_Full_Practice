const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/register", (req, res) => {
  let { user, password } = req.query;
  res.send(`GET Response: ${user} ${password}`);
});
app.post("/register", (req, res) => {
  let { user, password } = req.body;
  res.send(`POST Response: ${user} ${password}`);
  //   console.log(req.body);
  //   res.send("POST Response");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
