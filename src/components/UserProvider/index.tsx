import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../redux/features/LoggedUser/userSlice";

const index = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unlisten = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email }));
      } else {
        setUser(null);
      }
    });
    return () => unlisten();
  });
  return <>{children}</>;
};

export default index;
