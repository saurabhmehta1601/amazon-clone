import "../styles/globals.css";
import Head from "next/head";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import UserProvider from "../components/UserProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Roboto Font */}
      <Provider store={store}>
        <UserProvider>
          <Head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
          </Head>
          <Component {...pageProps} />
        </UserProvider>
      </Provider>
    </>
  );
}

export default MyApp;
