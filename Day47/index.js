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

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});

const customerSchema = new mongoose.Schema({
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("Pre middleware");
// });
customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCust = async () => {
  let newC = new Customer({
    name: "Tajbid",
  });
  let newO = new Order({
    item: "Burger",
    price: 200,
  });
  newC.orders.push(newO);
  await newO.save();
  await newC.save();
};

// addCust();
const delCus = async () => {
  let delC = await Customer.findByIdAndDelete("6808c137947bb31adba67e92");
  console.log(delC);
};
delCus();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
