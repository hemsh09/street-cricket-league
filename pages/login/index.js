import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAuthContext } from "../../context/context";
import LoginContainer from "../../src/Components/Login/components/LoginModal";

const Login = () => {
  const { auth } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    auth && router.push("/profile");
  }, [auth]);
  return <LoginContainer />;
};

export default Login;
