import Link from "next/link";
import React from "react";
import { CartItem, Header } from "../components";
import PaymentPage from "../components/UI/PaymentPage";
import { useAppSelector } from "../hooks/redux";

const Payment = () => {
  return (
    <>
      <Header />
      <PaymentPage />
    </>
  );
};

export default Payment;
