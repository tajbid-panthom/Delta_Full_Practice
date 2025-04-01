const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Tajbid01",
//   database: "tajbid_app",
// });
// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };
// let q = "insert into user values ?";
// // let user = ["123", "123_newuser", "abc@gmail.com", "123456"];
// let users = [];
// for (let i = 0; i < 100; i++) {
//   users.push(getRandomUser());
// }
// try {
//   connection.query(q, [users], (err, res) => {
//     if (err) throw err;
//     console.log(res);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tajbid01",
  database: "tajbid_app",
});
//home page

app.get("/", (req, res) => {
  let q = `select count(*) from user;`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result[0]["count(*)"]);
      let data = result[0]["count(*)"];
      // res.send(result[0]["count(*)"]);
      res.render("home", { data });
    });
  } catch (error) {
    console.log(error);
  }
});
//fetch user
app.get("/user", (req, res) => {
  let q = `select * from user order by username;`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("user", { users });
    });
  } catch (error) {
    console.log(error);
  }
});
//edit user
app.get("/user/:id/edit", (req, res) => {
  let id = req.params.id;
  let q = `select * from user where id ="${id}";`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.render("edit", { user: result[0] });
    });
  } catch (error) {
    console.log(error);
  }
});

//update user
app.patch("/user/:id", (req, res) => {
  let id = req.params.id;
  let { password: formPass, username: formUser } = req.body;
  let q = `select * from user where id ="${id}";`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      if (formPass !== result[0].password)
        throw new Error("Password is not correct");
      else {
        let q2 = `update user set username = "${req.body.username}" where id = "${id}";`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

//route to create user
app.get("/user/create", (req, res) => {
  res.render("createuser");
});

//create user
app.post("/user", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  let q = `insert into user (id, username, email, password) values ("${id}","${password}","${username}","${email}@gmail.com");`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (error) {
    console.log(error);
  }
});

//delete user
app.delete("/user/:id", (req, res) => {
  let id = req.params.id;
  let q = `delete from user where id = "${id}";`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (error) {
    console.log(error);
  }
});

//server port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// console.log(getRandomUser().userId);
