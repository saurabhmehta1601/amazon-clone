import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import React from "react";
import { CartItem, Header } from "../components";
import PaymentPage from "../components/UI/PaymentPage";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const Payment = () => {
  return (
    <>
      <Header />
      <Elements stripe={stripePromise}>
        <PaymentPage />
      </Elements>
    </>
  );
};

export default Payment;
