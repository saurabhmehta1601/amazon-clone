import React, { useState } from "react";
import { ThemeButton } from "../components";
import styles from "../styles/login.module.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const signIn = () => {
    if (email.trim() === "") {
      alert("Please enter email");
    } else if (password.trim() === "") {
      alert("Please enter password");
    } else {
      setDisabled(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((loggedUser) => {
          console.log("logged User", loggedUser);
          router.replace("/");
        })
        .catch((err) => {
          alert(err.message);
          setDisabled(false);
        });
    }
  };

  const register = () => {
    if (email.trim() === "") {
      alert("Please enter email");
    } else if (password.trim() === "") {
      alert("Please enter password");
    } else {
      setDisabled(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((loggedUser) => {
          console.log("Registered User ", loggedUser);
          router.replace("/");
        })
        .catch((err) => {
          alert(err.message);
          setDisabled(false);
        });
    }
  };

  return (
    <div className={styles.layout}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
        alt="amazon-logo"
      />
      <div className={styles.container}>
        <h2>Sign In</h2>
        <form className={styles.form}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
        </form>
        <ThemeButton type="button" onClick={signIn} disabled={disabled}>
          Sign In
        </ThemeButton>
        <small>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </small>
        <ThemeButton
          type="button"
          onClick={register}
          style={{ backgroundColor: "#EFEFEF" }}
          disabled={disabled}
        >
          Create your Amazon account
        </ThemeButton>
      </div>
    </div>
  );
};

export default Login;
