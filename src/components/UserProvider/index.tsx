import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../firebase";
import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../redux/features/LoggedUser/userSlice";

const index = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unlisten = onAuthStateChanged(auth, (user) => {
      if (user) {
        // set logged user in redux state
        console.log("user is ", user);
        console.log("user uid is ", user.uid);
        console.log("user email is ", user.email);
        dispatch(setUser({ uid: user.uid, email: user.email }));
      } else {
        // set user to be null
        console.log("user is null");
        setUser(null);
      }
    });
    return () => unlisten();
  });
  return <>{children}</>;
};

export default index;
