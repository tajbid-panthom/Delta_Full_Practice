const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("Hi I am middleware");
//   //   res.send("Hello from middleware");
//   next();
// });
// app.use((req, res, next) => {
//   //   res.send("Hello from middleware 2");
//   console.log("Hi from middleware 2");
//   next();
// });

//logger morgan

// app.use((req, res, next) => {
//   req.time = new Date(Date.now());
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("access denied");
});
app.get("/api", (req, res) => {
  res.send("Hello from api");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/random", (req, res) => {
  res.send("Random Hello World");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
