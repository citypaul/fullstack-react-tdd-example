import express from "express";
import { recommendationsProduct1 } from "./mock-data/recommendations-product1";
import { recommendationsProduct2 } from "./mock-data/recommendations-product2";

const app = express();
const port = 3005;

app.get<{ productId: string }>("/recommendations/:productId?", (req, res) => {
  const { productId } = req.params;

  if (productId === "123") {
    return res.json(recommendationsProduct1);
  }

  return res.json(recommendationsProduct2);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
