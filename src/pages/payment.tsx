import Link from "next/link";
import React from "react";
import { CartItem, Header } from "../components";
import { useAppSelector } from "../hooks/redux";
import styles from "../styles/payment.module.css";

const Payment = () => {
  const { products } = useAppSelector((state) => state.cart);
  return (
    <div className={styles.payment}>
      <Header />
      <h1>
        Checkout (
        <Link href="/checkout">
          <a>{products?.length || 0} items </a>
        </Link>
        )
      </h1>
      <div className={styles.paymentContainer}>
        {/* delivery address */}
        <section>
          <h3>Delivery Address</h3>
          <p> Malviya Nagar ,Jaipur , Rajasthan </p>
        </section>
        {/* payment products*/}
        <section>
          <h3>Review items </h3>
          <div className={styles.paymentItems}>
            {products.map((p) => (
              <CartItem
                key={p.id}
                id={p.id}
                title={p.title}
                image_url={p.image_url}
                rating={p.rating}
                price={p.price}
              ></CartItem>
            ))}
          </div>
        </section>
        {/* payment method*/}
        <section>
          <h3>Payment Method </h3>
          <div className={styles.paymentDetails}>
            {/* stripe integration */}
            Stripe online payment
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment;
