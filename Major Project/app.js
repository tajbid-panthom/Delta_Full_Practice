const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const Listing = require("./models/listing");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);

main()
  .then(() => console.log("Conncetion Done."))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

//index route

app.get("/listings", async (req, res) => {
  const listings = await Listing.find({});
  res.render("listings/index", { listings });
});

//new route
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});
//show route
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show", { listing });
});

//create route
app.post("/listings", async (req, res) => {
  //   const { title, description, image, price, location, country } = req.body;
  const newListing = new Listing(req.body.listing);
  //   const newListing = new Listing({
  //     title,
  //     description,
  //     image,
  //     price,
  //     location,
  //     country,
  //   });

  await newListing.save();
  res.redirect("/listings");
});

//edit route

app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit", { listing });
});

//put route

app.put("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const newListing = req.body.listing;
  await Listing.findByIdAndUpdate(id, newListing, {
    new: true,
  });
  res.redirect(`/listings/${id}`);
});
app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect(`/listings`);
});

//testlisting
// app.get("/testlisting", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "Beautiful villa in the heart of the city",
//     price: 1200,
//     location: "Jashore , Khulna",
//     country: "Bangladesh",
//   });

//   await sampleListing.save();

//   res.send("Listing Created");
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
