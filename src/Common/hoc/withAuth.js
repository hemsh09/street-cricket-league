import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../../../context/context";

const WithAuth = (Component) => {
  const router = useRouter();
  useEffect(() => {
    if (!auth) {
      router.push("/");
    }
  }, [auth, router]);
  const { auth } = useAuthContext();
  ({ ...props }) => {
    return auth && <Component {...props} />;
  };
};

export default WithAuth;
