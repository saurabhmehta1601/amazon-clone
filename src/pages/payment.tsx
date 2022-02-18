import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Header } from "../components";
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
