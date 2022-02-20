import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import UserProvider from "../components/UserProvider";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Provider>
  );
}

export default App;
