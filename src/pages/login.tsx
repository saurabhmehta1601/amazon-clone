import React, { useState } from "react";
import { ThemeButton } from "../components";
import styles from "../styles/authPage.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const signIn = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter credentials");
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

        <small>
          Don&apos; t have an account yet ?
          <Link href="/register">
            <a>create now .</a>
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
