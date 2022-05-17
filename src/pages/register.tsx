import React, { useState } from "react";
import { ThemeButton } from "../components";
import styles from "../styles/authPage.module.css";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/router";
import { addDocument } from "../firebase/db/utils";
import { useAppSelector } from "../hooks/redux";

const Register = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const user = useAppSelector((state) => state.user);
  const handleFormSubmission = (e) => {
    e.preventDefault();
    const email = e.target["email"].value;
    const name = e.target["name"].value;
    const password = e.target["password"].value;
    const confirm_password = e.target["confirm_password"].value;
    const phone = e.target["phone"].value;
    const address = {
      line1: e.target["line1"].value,
      postal_code: e.target["postal_code"].value,
      city: e.target["city"].value,
      state: e.target["state"].value,
      country: e.target["country"].value,
    };

    if (password != confirm_password) {
      alert("Passwords do not match . Please check again .");
      return;
    }

    setDisabled(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const uid = userCredentials.user.uid;
        const email = userCredentials.user.email;
        // save user to firestore database
        addDocument("user", { email, phone, name, address }, uid);
        router.replace("/");
      })
      .catch((err) => {
        alert(err.message);
        setDisabled(false);
      });
  };
  if (user.uid) {
    router.replace("/");
  }
  return (
    <div className={styles.layout}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
        alt="amazon-logo"
      />
      <div className={styles.container}>
        <h2>Sign In</h2>
        <form className={styles.form} onSubmit={handleFormSubmission}>
          {/* Name */}
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" required={true} name="your_name" />
          {/* Contact No */}
          <label htmlFor="phone">Contact No ( 10 digits ) </label>
          <input
            type="tel"
            pattern="[1-9][0-9]{9}"
            id="phone"
            required={true}
          />
          {/* Email */}
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required={true} />
          {/* Line 1 */}
          <label htmlFor="line1">House Address</label>
          <input type="text" id="line1" required={true} />
          {/* Postal Code */}
          <label htmlFor="postal_code ">Postal Code </label>
          <input type="number" id="postal_code" required={true} />
          {/* City */}
          <label htmlFor="city">City </label>
          <input type="text" id="city" required={true} />
          {/* State */}
          <label htmlFor="state">State</label>
          <input type="text" id="state" required={true} />
          {/* Country */}
          <label htmlFor="country">Country</label>
          <input type="text" id="country" required={true} />
          {/* Password */}
          <label htmlFor="password">Password (min 8 characters long) </label>
          <input minLength={8} type="password" id="password" required={true} />
          {/* Confirm Password */}
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type="password" id="confirm_password" required={true} />
          <ThemeButton
            type="submit"
            style={{ backgroundColor: "#EFEFEF" }}
            disabled={disabled}
          >
            Create your Amazon account
          </ThemeButton>
        </form>
        <small>
          By registering you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </small>
        <small>
          Already have an account ?
          <Link href="/login">
            <a> Sign in </a>
          </Link>
          instead .
        </small>
      </div>
    </div>
  );
};

export default Register;
