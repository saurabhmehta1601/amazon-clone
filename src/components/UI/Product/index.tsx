import React from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { addToCart } from "../../../redux/features/ShoppingCart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

export interface IProduct {
  id: string;
  title: string;
  price: number;
  image_url: string;
  rating: number;
  img_width?: number;
  img_height?: number;
}

const Product = ({
  id,
  title,
  price,
  image_url,
  rating,
  img_height,
  img_width,
}: IProduct) => {
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addToCart({ id, title, price, image_url, rating }));
    toast(`Added ${title}`);
  };
  return (
    <>
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
        <Image
          src={image_url}
          width={img_width ? img_width : "100"}
          height={img_height ? img_height : "150"}
          alt={title}
        />
        <button onClick={addProductToCart}>Add to Cart</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Product;
