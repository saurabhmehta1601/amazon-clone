import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/login");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return <>{!loading && children}</>;
};

export default ProtectedRoute;
