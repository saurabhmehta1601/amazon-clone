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
      try {
        setUserInState();
        console.log(user);
      } catch (error) {
        alert(error.message);
      }

      async function setUserInState() {
        if (user) {
          const userDoc = await getDocument("user", user.uid);
          if (userDoc) {
            const { phone, address, name } = userDoc;
            dispatch(
              setUser({
                uid: user.uid,
                email: user.email,
                address,
                phone,
                name,
              })
            );
          } else {
            setUser({ uid: user.uid, email: user.email });
          }
        } else {
          setUser(null);
        }
      }
    });
    return () => unlisten();
  });
  return <>{children}</>;
};

export default UserProvider;
