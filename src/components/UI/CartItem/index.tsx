import React from "react";
import styles from "./styles.module.css";
import { IProduct } from "../Product";
import ThemeButton from "../ThemeButton";
import { useAppDispatch } from "../../../hooks/redux";
import { removeFromCart } from "../../../redux/features/ShoppingCart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const CartItem = ({ id, title, price, image_url, rating }: IProduct) => {
  const dispatch = useAppDispatch();
  const removeItemFromCart = () => {
    dispatch(removeFromCart(id));
    toast(`Removed ${title}`);
  };
  return (
    <>
      <div className={styles.product}>
        <Image
          width={120}
          height={100}
          src={image_url}
          alt={title}
        />
        <div className={styles.info}>
          <h5 className={styles.productTitle}>{title}</h5>
          <p>
            <small>$</small>
            {price}
          </p>
          <div className={styles.rating}>
            {Array(rating)
              .fill(undefined)
              .map((_, idx) => {
                return <span key={idx}>⭐</span>;
              })}
          </div>
          <div className={styles.removeBtnContainer}>
            <ThemeButton onClick={removeItemFromCart} type="button">
              Remove from cart
            </ThemeButton>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CartItem;
