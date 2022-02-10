import React, { useState } from "react";
import { ThemeButton } from "../components";
import styles from "../styles/login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.layout}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
        alt=""
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
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <ThemeButton type="button" onClick={() => {}}>
          Sign In
        </ThemeButton>
        <small>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </small>
        <ThemeButton
          type="button"
          onClick={() => {}}
          style={{ backgroundColor: "#EFEFEF" }}
        >
          Create your Amazon account
        </ThemeButton>
      </div>
    </div>
  );
};

export default Login;
