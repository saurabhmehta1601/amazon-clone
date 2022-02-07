import React from "react";
import styles from "./styles.module.css";

const Product = ({ title, price, image, rating }) => {
  return (
    <div className={styles.product}>
      <div className={styles.productInfo}>
        <p>{title}</p>
        <p className={styles.productPrice}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.productRating}>
          {Array(rating)
            .fill(undefined)
            .map((_, idx) => (
              <span key={idx}>⭐</span>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
