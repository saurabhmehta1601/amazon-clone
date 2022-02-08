import React from "react";
import CurrencyFormat from "react-currency-format";
import styles from "../styles/checkout.module.css";
import Subtotal from "../components/Subtotal";

const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <div className={styles.left}>
        <img
          className={styles.checkoutAd}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout-add"
        />
        <div className={styles.checkoutTitle}>
          <h2>Your Shopping Basket</h2>
        </div>
      </div>
      <div className={styles.right}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
