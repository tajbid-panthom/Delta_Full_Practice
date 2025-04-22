const express = require("express");
const mongoose = require("mongoose");
const app = express();
main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/temp");
  // Use your MongoDB connection string here
}

const userSchema = new mongoose.Schema({
  username: String,
  addresses: [{ location: String, city: String }],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "John",
    addresses: [
      {
        location: "123 Main St",
        city: "New York",
      },
    ],
  });
  let result = await user1.save();
  console.log(result);
};

addUsers();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
