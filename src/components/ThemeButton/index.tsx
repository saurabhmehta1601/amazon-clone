import React from "react";
import styles from "./styles.module.css";

interface IProps {
  children: React.ReactChild;
  type: "button" | "submit";
  onClick: () => void;
  style?: object;
}

const ThemeButton = ({ children, type, onClick, style }: IProps) => {
  return (
    <button onClick={onClick} type={type} className={styles.btn} style={style}>
      {children}
    </button>
  );
};

export default ThemeButton;
