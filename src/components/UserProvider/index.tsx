import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { getDocument } from "../../firebase/db/utils";
import { auth } from "../../firebase/firebase";
import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../redux/features/LoggedUser/userSlice";

const UserProvider = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unlisten = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { address, phone } = await getDocument("user", user.uid);
        dispatch(setUser({ uid: user.uid, email: user.email, address, phone }));
      } else {
        setUser(null);
      }
    });
    return () => unlisten();
  });
  return <>{children}</>;
};

export default UserProvider;
