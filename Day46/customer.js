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

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  //   const newCustomer = new Customer({ name: "John Doe" });
  //   let order1 = await Order.findOne({ item: "Laptop" });
  //   let order2 = await Order.findOne({ item: "Phone" });
  //   newCustomer.orders.push(order1);
  //   newCustomer.orders.push(order2);
  //   let result = await newCustomer.save();
  //   console.log(result);
  let result = await Customer.find({}).populate("orders");
  console.log(result[0].orders);
};
addCustomer();

// const addOrders = async () => {
//   let result = await Order.insertMany([
//     { item: "Laptop", price: 1000 },
//     { item: "Phone", price: 500 },
//     { item: "Tablet", price: 300 },
//   ]);
//   console.log(result);
// };
// addOrders();
