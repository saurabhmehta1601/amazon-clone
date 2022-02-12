import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const logoutUser = () => {
  signOut(auth)
    .then(() => {
      alert("logged out successfully");
    })
    .catch((err) => {
      alert(err.message);
    });
};
