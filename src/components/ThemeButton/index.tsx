import React from "react";
import styles from "./styles.module.css";

const ThemeButton = ({ children, type, onClick }) => {
  return (
    <button onClick={onClick} type={type} className={styles.btn}>
      {children}
    </button>
  );
};

export default ThemeButton;
