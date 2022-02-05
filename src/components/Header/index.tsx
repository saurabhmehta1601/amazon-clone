import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        className={styles.headerLogo}
        src="/logo.svg"
        alt="amazon-logo"
        height="50"
        width="80"
      />
      <div className={styles.headerSearch}>
        <input className={styles.headerSearchInput} type="text" />
      </div>
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
      </div>
    </div>
  );
};

export default Header;
