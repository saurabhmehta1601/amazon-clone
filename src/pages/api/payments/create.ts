import { connectFirestoreEmulator } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // @ts-ignore
    const total = req.query.total;
    console.log("Payment recieved for amount", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    return res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  }

  res.status(403).send("METHOD NOT ALLOWED!");
}
