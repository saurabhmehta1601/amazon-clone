import React from "react";
import styles from "../styles/checkout.module.css";

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
        <div className={styles.checkoutTotal}>
          <p className={styles.subtotalTitle}>
            Subtotal (2 items): <strong>$250.96</strong>
          </p>
          <form className={styles.checkoutForm}>
            <input type="checkbox" name="containsGift" />
            <label htmlFor="">This order contains a gift</label>
            <button type="submit">Proceed to checkout</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;