const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
let posts = [
  {
    id: uuidv4(),
    username: "apnacollege",
    content: "I love coding!",
  },
  {
    id: uuidv4(),
    username: "tajbidHossain",
    content: "I love coding too!",
  },
  {
    id: uuidv4(),
    username: "lms-learning",
    content: "A platform to buy coding courses!",
  },
];

app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new");
});
app.post("/posts", (req, res) => {
  const { username, content } = req.body;
  let id = uuidv4();
  posts.unshift({
    id,
    username,
    content,
  });
  //   res.render("index", { posts });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id == id);
  if (!post) {
    return res.send("Post not found");
  }
  res.render("show", { post });
});
app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  let newContent = req.body.content;
  const post = posts.find((p) => p.id == id);
  post.content = newContent;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id == id);
  if (!post) {
    return res.send("Post not found");
  }
  res.render("edit", { post });
});
app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter((p) => p.id != id);
  res.redirect("/posts");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
