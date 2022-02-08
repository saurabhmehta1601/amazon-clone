import React from "react";
import CurrencyFormat from "react-currency-format";
import styles from "./styles.module.css";

const Subtotal = () => {
  return (
    <div className={styles.checkoutTotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className={styles.subtotalTitle}>
              Subtotal (2 items): <strong> {value}</strong>
            </p>
            <form className={styles.checkoutForm}>
              <input type="checkbox" name="containsGift" />
              <label htmlFor="">This order contains a gift</label>
              <button type="submit">Proceed to checkout</button>
            </form>
          </>
        )}
        value={2350.96}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
    </div>
  );
};

export default Subtotal;
