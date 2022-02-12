import React from "react";
import CurrencyFormat from "react-currency-format";
import { useAppSelector } from "../../../hooks/redux";
import ThemeButton from "../ThemeButton";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

const Subtotal = () => {
  const router = useRouter();
  const cart = useAppSelector((state) => state.cart);
  const navigateToPayment = () => {
    router.push("/payment");
  };
  return (
    <div className={styles.checkoutTotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className={styles.subtotalTitle}>
              Subtotal ({cart.products.length}{" "}
              {cart.products.length > 1 ? "items" : "item"} ):{" "}
              <strong> {value}</strong>
            </p>
            <form className={styles.checkoutForm}>
              <div className={styles.formControl}>
                <input type="checkbox" name="containsGift" />
                <label htmlFor="">This order contains a gift</label>
              </div>
              <ThemeButton type="button" onClick={navigateToPayment}>
                Proceed to checkout
              </ThemeButton>
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
