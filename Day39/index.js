const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/temp");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()
  .then((res) => console.log("Successfully Connection Done"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
const User = mongoose.model("User", userSchema);

//user created
const user1 = new User({ name: "Tajbid", email: "tajbid@gmail.com", age: 20 });
const user2 = new User({
  name: "Hossain",
  email: "hossain@gmail.com",
  age: 20,
});
// user1.save();
// user2.save();

// User.find({}).then((res) => console.log(res));
// User.updateOne({ name: "Hossain" }, { age: 21 }).then((res) =>
//   console.log(res)
// );

User.findOneAndUpdate({ name: "Tajbid" }, { age: 20.8 }, { new: true }).then(
  (res) => console.log(res)
);

//schema validation
