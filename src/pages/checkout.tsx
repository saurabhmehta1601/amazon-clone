import React from "react";
import styles from "../styles/checkout.module.css";
import Subtotal from "../components/Subtotal";
import { useAppSelector } from "../hooks/redux";
import CartItem from "../components/CartItem";

const Checkout = () => {
  const cart = useAppSelector((state) => state.cart);
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
          <div className={styles.cartItemsList}>
            {cart.products.map((item) => (
              <CartItem
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image_url={item.image_url}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
