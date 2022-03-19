import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import CartItem from "../CartItem";
import styles from "./styles.module.css";
import CurrencyFormat from "react-currency-format";
import { emptyProducts } from "../../../redux/features/ShoppingCart/cartSlice";
import { useRouter } from "next/router";
import ThemeButton from "../ThemeButton";
import Lottie from "react-lottie";
import paymentSuccessAnimationData from "../../../lottie/payment-success.json";

const getProductsTotalPrice = (products) => {
  return products.reduce((acc, prod) => acc + prod.price, 0);
};

function PaymentPage() {
  const { products } = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // generate stripe secret to charge the customer
    const getClientSecret = async () => {
      const res = await axios({
        method: "POST",
        url: `/api/payments/create?total=${
          getProductsTotalPrice(products) * 100
        }`,
        data: {
          email: user.email,
          address: user.address,
          name: user.name,
        },
      });
      setClientSecret(res.data.clientSecret);
    };
    getClientSecret();
  }, [products, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((paymentIntent) => {
        // for payment confirmation
        // add order to database
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch(emptyProducts);
      });
  };

  const handleCardChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  if (succeeded) {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: paymentSuccessAnimationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <Lottie
        eventListeners={[
          {
            eventName: "complete",
            callback: () => {
              router.replace("/");
            },
          },
        ]}
        options={defaultOptions}
        height={400}
        width={400}
      />
    );
  }

  return (
    <div className={styles.payment}>
      <h1>
        Checkout (
        <Link href="/reviewCart">
          <a>{products?.length || 0} items </a>
        </Link>
        )
      </h1>
      <div className={styles.paymentContainer}>
        {/* delivery address */}
        <section>
          <h3>Delivery Address</h3>
          <p> {user.address} </p>
        </section>
        {/* payment products*/}
        <section>
          <h3>Review items </h3>
          <div className={styles.paymentItems}>
            {products.map((p) => (
              <CartItem
                key={p.id}
                id={p.id}
                title={p.title}
                image_url={p.image_url}
                rating={p.rating}
                price={p.price}
              ></CartItem>
            ))}
          </div>
        </section>
        {/* payment method*/}
        <section>
          <h3>Payment </h3>
          <div className={styles.paymentDetails}>
            {/* stripe integration */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleCardChange} />
              <div className={styles.priceContainer}>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getProductsTotalPrice(products)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                {processing ? (
                  <p>Processing</p>
                ) : (
                  <ThemeButton
                    style={{
                      margin: "1em 0",
                      padding: "0.4em ",
                      width: "fit-content",
                    }}
                    disabled={processing || disabled || succeeded}
                    type="submit"
                  >
                    Buy Now
                  </ThemeButton>
                )}
              </div>

              {/* Errors */}
              {error && <small className={styles.errorMsg}>* {error}</small>}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PaymentPage;
