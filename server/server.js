const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51NX5P9BG3FoOFehURumPAZ2fqSexMnKhGUFJQwDyeuL5yrYzNU4akU4ZIKD4X7jX6CyiCzJgmFn22d8Tc6RaQVjX00PoxjX6U9"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });
  console.log();
  const sessiion = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url:
      "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000/shop",
  });

  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  const intent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "gbp",
    payment_method_types: ["card"],
    metadata: {
      order_id: orderNumber,
    },
  });

  res.send(
    JSON.stringify({
      url: sessiion.url,
      client_secret: intent.client_secret,
    })
  );
  console.log(sessiion);
  console.log(intent);
});

app.listen(4000, () => console.log("listening on port 4000"));
