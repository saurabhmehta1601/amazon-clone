import React from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { addToCart } from "../../redux/features/ShoppingCart/cartSlice";

const Product = ({ id, title, price, image_url, rating }) => {
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addToCart({ id, title, price, image_url, rating }));
  };
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
      <img src={image_url} alt={title} />
      <button onClick={addProductToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
