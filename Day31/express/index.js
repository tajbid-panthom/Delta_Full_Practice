import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// app.use((req, res) => {
//   console.log("Hello, World!");
//   res.send({
//     message: "Hello, World!",
//   });
// });

app.get("/apple", (req, res) => {
  res.send({ Apple: "Fruit" });
});
app.get("/orange", (req, res) => {
  res.send({ Oragne: "Fruit" });
});
app.get("/:name/:id", (req, res) => {
  const { name, id } = req.params;
  res.send(name + id);
});
app.get("/search", (req, res) => {
  let { q, color } = req.query;
  res.send(q + color);
});
