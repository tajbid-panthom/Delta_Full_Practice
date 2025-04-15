const express = require("express");
const app = express();
const ExpressError = require("./expressError");

// app.use((err, req, res, next) => {
//   console.log(err);
// });
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "Access Denied");
};

app.get("/api", checkToken, (req, res) => {
  res.send("I am from api");
});
app.get("/", (req, res) => {
  res.send("I am from root");
});

app.get("/err", (req, res) => {
  acbd = abcd;
});

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

app.get(
  "/admin",
  asyncWrap(async (req, res) => {
    throw new ExpressError(403, "Access is forbidded");
  })
);

app.use((err, req, res, next) => {
  console.log(err.name);
  next(err);
});
app.use((err, req, res, next) => {
  console.log("___ERROR___");
  let { status = 500, message = "Some error occured" } = err;
  res.status(status).send(message);
});
app.listen(8080, (req, res) => {
  console.log("Server is running on port 8080");
});
