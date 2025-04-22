const mongoose = require("mongoose");

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
  email: String,
});

const postSchema = new mongoose.Schema({
  content: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);
const addPost = async () => {
  let user1 = await User.findOne({ email: "john@gmail.com" });
  let post2 = new Post({
    content: "Bye Bye",
    likes: 10,
    user: user1,
  });
  let res = await Post.find({});
  console.log(res);
};
addPost();
