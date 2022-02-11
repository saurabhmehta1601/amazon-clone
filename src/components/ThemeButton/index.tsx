import React from "react";
import styles from "./styles.module.css";

interface IProps {
  children: React.ReactChild;
  type: "button" | "submit";
  onClick: () => void;
  style?: object;
  disabled?: boolean;
}

const ThemeButton = ({ children, type, onClick, style, disabled }: IProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={styles.btn}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ThemeButton;
