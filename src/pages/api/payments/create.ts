import type { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // @ts-ignore
    const total = req.query.total;

    const { email, address, name } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      description: "payment for products order by amazon clone",
      shipping: {
        name,
        // hardcoding the address right now will add these fields from db once stored during registration
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
    });
    return res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  }

  res.status(403).send("METHOD NOT ALLOWED!");
}
