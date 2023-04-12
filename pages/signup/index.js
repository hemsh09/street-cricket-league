import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthContext } from "../../context/context";

import SignupForm from "../../src/Components/Signup/components";

const Signup = () => {
  const { auth } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    auth && router.push("/profile");
  }, [auth]);
  return <SignupForm />;
};

export default Signup;
