import React from "react";
import styles from "../styles/checkout.module.css";
import { useAppSelector } from "../hooks/redux";
import { Header, CartItem, SubTotal } from "../components";
import Image from "next/image";

const Checkout = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <>
      <Header />
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
              {cart.products.length === 0 ? (
                <div className={styles.empty_cart}>
                  <a
                    href="https://www.flaticon.com/free-icons/shopper"
                    title="shopper icons"
                  >
                    <Image src="/empty-cart.png" width={200} height={200} />
                  </a>
                  <h3>Your cart is empty</h3>
                </div>
              ) : (
                cart.products.map((item) => (
                  <CartItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image_url={item.image_url}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <SubTotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
