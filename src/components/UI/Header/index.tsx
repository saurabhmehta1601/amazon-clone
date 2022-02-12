import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "../../../hooks/redux";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const navigateToCheckout = () => {
    router.push("/checkout");
  };
  const navigateToHome = () => {
    router.push("/");
  };
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user);
  const navigateToProfile = () => {
    if (user.uid) {
      router.push(`/profile/${user.uid}`);
    }
  };
  return (
    <div className={styles.header}>
      {/* Logo */}
      <Image
        onClick={navigateToHome}
        className={styles.headerLogo}
        src="/logo.svg"
        alt="amazon-logo"
        height="35"
        width="35"
      />
      {/* Search */}
      <div className={styles.headerSearch}>
        <input className={styles.headerSearchInput} type="text" />
        <FaSearch className={styles.headerSearchIcon} />
      </div>
      {/* Navigation */}
      <div className={styles.headerNav}>
        <div className={styles.headerOption} onClick={navigateToProfile}>
          <span className={styles.headerOptionLineOne}>Hello</span>
          <span className={styles.headerOptionLineTwo}>
            {user?.email || "Sign In"}
          </span>
        </div>
        <div className={styles.headerOption}>
          <span className={styles.headerOptionLineOne}>Returns</span>
          <span className={styles.headerOptionLineTwo}>& Orders</span>
        </div>
        <div className={styles.headerOption}>
          <span className={styles.headerOptionLineOne}>Your</span>
          <span className={styles.headerOptionLineTwo}>Prime</span>
        </div>
        <div className={styles.headerOptionBasket} onClick={navigateToCheckout}>
          <FaShoppingCart className={styles.headerBasketIcon} />
          <span className={styles.headerBasketCount}>
            {cart.products.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
