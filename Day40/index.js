const express = require("express");
const mongoose = require("mongoose");
const Chat = require("./models/chat");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "views")));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then(() => console.log("Successfully Connection Done"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});
//home route
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    // chats.sort({ createdAt: -1 });
    chats.sort().reverse(true);
    //   console.log(chats);
    let len = chats.length;
    res.render("index", { chats, len });
  } catch (error) {
    next(error);
  }
});
//new route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(404, "Page not found");
  res.render("newChat");
});

//create route
app.post("/chats", async (req, res, next) => {
  // console.log(req.body);
  try {
    const { fname, msg, tname } = req.body;
    const chat = new Chat({ from: fname, msg, to: tname });
    await chat.save();
    res.redirect("/chats");
  } catch (error) {
    next(error);
  }
});

//edit route
app.get("/chats/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render("editChat", { chat });
  } catch (error) {
    next(error);
  }
});

app.get("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(500, "Chat not found"));
    }
    res.render("editChat.ejs", { chat });
  } catch (error) {
    next(error);
  }
});

//update route
app.patch("/chats/:id", async (req, res) => {
  try {
    const { from, msg, to } = req.body;
    const { id } = req.params;
    const chat = await Chat.findByIdAndUpdate(
      id,
      { from, msg, to },
      { runValidators: true, new: true }
    );
    res.redirect("/chats");
  } catch (error) {
    next(error);
  }
});

app.delete("/chats/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Some error occured" } = err;
  res.status(status).send(message);
});
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
