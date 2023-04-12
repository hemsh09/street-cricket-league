import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AppWrapper({ children }) {
  const isAuth = typeof window !== "undefined" && localStorage.getItem("auth");
  const parse = JSON.parse(isAuth);
  const [auth, setAuth] = useState(
    parse ? parse?.auth && parse?.token.length > 0 : false
  );
  const contextValue = {
    auth,
    setAuth,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
