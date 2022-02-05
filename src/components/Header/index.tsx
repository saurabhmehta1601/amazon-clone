import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = () => {
  return (
    <div className={styles.header}>
      {/* Logo */}
      <Image
        className={styles.headerLogo}
        src="/logo.svg"
        alt="amazon-logo"
        height="35"
        width="35"
      />
      {/* Search */}
      <div className={styles.headerSearch}>
        <input className={styles.headerSearchInput} type="text" />
        <SearchSharpIcon className={styles.headerSearchIcon} />
      </div>
      {/* Navigation */}
      <div className={styles.headerNav}>
        <div className={styles.headerOption}>
          <span className={styles.headerOptionLineOne}>Hello</span>
          <span className={styles.headerOptionLineTwo}>Sign In</span>
        </div>
        <div className={styles.headerOption}>
          <span className={styles.headerOptionLineOne}>Returns</span>
          <span className={styles.headerOptionLineTwo}>& Orders</span>
        </div>
        <div className={styles.headerOption}>
          <span className={styles.headerOptionLineOne}>Your</span>
          <span className={styles.headerOptionLineTwo}>Prime</span>
        </div>
        <div className={styles.headerOptionBasket}>
          <ShoppingBasketIcon className={styles.headerBasketIcon} />
          <span className={styles.headerBasketCount}>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
