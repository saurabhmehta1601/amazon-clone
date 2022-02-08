import React from "react";
import styles from "./styles.module.css";
import { IProduct } from "../Product";

const CartItem = ({ id, title, price, image_url, rating }: IProduct) => {
  return (
    <div className={styles.product}>
      <img src={image_url} alt={title} />
      <div className={styles.info}>
        <h5>{title}</h5>
        <p>
          <small>$</small>
          {price}
        </p>
        <div className={styles.rating}>
          {Array(rating)
            .fill(undefined)
            .map((_, idx) => {
              return <>⭐</>;
            })}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
