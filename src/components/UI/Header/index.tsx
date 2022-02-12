import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useRouter } from "next/router";
import { logoutUser } from "../../../firebase/auth/utils";
import { setUser } from "../../../redux/features/LoggedUser/userSlice";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

const Header = () => {
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const navigateToCheckout = () => {
    router.push("/checkout");
  };
  const navigateToHome = () => {
    router.push("/");
  };
  const navigateToLogin = () => {
    router.push("/login");
  };
  const signOutUser = () => {
    logoutUser().then(() => {
      dispatch(setUser(null));
    });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        alert("Email for verification has been sent .");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
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
          <div className={styles.headerOption}>
            <span className={styles.headerOptionLineOne}>
              {user?.email ? user?.email : "Hello"}
            </span>
            <span className={styles.headerOptionLineTwo}>
              {user?.email ? (
                <span onClick={signOutUser}>Sign Out</span>
              ) : (
                <span onClick={navigateToLogin}>Sign In</span>
              )}
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
          <div
            className={styles.headerOptionBasket}
            onClick={navigateToCheckout}
          >
            <FaShoppingCart className={styles.headerBasketIcon} />
            <span className={styles.headerBasketCount}>
              {cart.products.length}
            </span>
          </div>
        </div>
      </div>
      {auth.currentUser && !auth.currentUser.emailVerified && (
        <div className={styles.verifyEmail}>
          Dear user your email is not verified . Click
          <span onClick={verifyEmail}> here </span>
          to get an email for account verification .
        </div>
      )}
    </>
  );
};

export default Header;
