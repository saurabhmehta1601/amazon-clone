import React from "react";
import CurrencyFormat from "react-currency-format";
import { useAppSelector } from "../../hooks/redux";
import styles from "./styles.module.css";

const Subtotal = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div className={styles.checkoutTotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className={styles.subtotalTitle}>
              Subtotal ({cart.products.length} items): <strong> {value}</strong>
            </p>
            <form className={styles.checkoutForm}>
              <div className={styles.formControl}>
                <input type="checkbox" name="containsGift" />
                <label htmlFor="">This order contains a gift</label>
              </div>
              <button type="submit">Proceed to checkout</button>
            </form>
          </>
        )}
        value={cart.products.reduce((acc, item) => acc + item.price, 0)}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
    </div>
  );
};

export default Subtotal;
