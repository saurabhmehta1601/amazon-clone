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

const getProductsTotalPrice = (products) => {
  return products.reduce((acc, prod) => acc + prod.price, 0);
};

function PaymentPage() {
  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
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
        url: `/payments/create?total=${getProductsTotalPrice(products) * 100}`,
      });
      setClientSecret(res.data.clientSecret);
    };
    getClientSecret();
  }, [products]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
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
        router.replace("/orders");
      });
  };

  const handleCardChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className={styles.payment}>
      <h1>
        Checkout (
        <Link href="/checkout">
          <a>{products?.length || 0} items </a>
        </Link>
        )
      </h1>
      <div className={styles.paymentContainer}>
        {/* delivery address */}
        <section>
          <h3>Delivery Address</h3>
          <p> Malviya Nagar ,Jaipur , Rajasthan </p>
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
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PaymentPage;
