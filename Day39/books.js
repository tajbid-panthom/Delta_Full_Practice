const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Successfully connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/temp");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "Math xii",
  author: "Tajbid",
  price: 599,
});
let book2 = new Book({
  title: "Math xi",
  author: "Tajbid",
  price: 599,
});
book2
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
