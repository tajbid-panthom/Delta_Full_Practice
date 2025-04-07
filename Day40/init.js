const mongoose = require("mongoose");
const Chat = require("./models/chat");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then(() => console.log("Successfully Connection Done"))
  .catch((err) => console.log(err));

let chats = [
  {
    from: "John",
    to: "Doe",
    msg: "Hello Doe",
  },
  {
    from: "Doe",
    to: "John",
    msg: "Hello John",
  },
  {
    from: "John",
    to: "Doe",
    msg: "How are you?",
  },
  {
    from: "Doe",
    to: "John",
    msg: "I am fine, thank you!",
  },
];

Chat.insertMany(chats);
