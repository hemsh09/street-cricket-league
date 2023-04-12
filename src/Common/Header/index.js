import React from "react";
import { withStyles, useMediaQuery } from "@material-ui/core";
import dynamic from "next/dynamic";

import { useRouter } from "next/router";
import { useAuthContext } from "../../../context/context";
import { FaUserAlt } from "react-icons/fa";

import styles from "./styles";

const Box = dynamic(() => import("@material-ui/core/Box"));
const Button = dynamic(() => import("@material-ui/core/Button"));
const NavBar = dynamic(() => import("./NavBar/NavBar"));
const BurgerMenu = dynamic(() => import("./BurgerMenu/BurgerMenu"));

const Header = ({ classes }) => {
  const router = useRouter();
  const media1024 = useMediaQuery("(max-width: 1024px)");
  const { auth, setAuth } = useAuthContext();

  const HeaderBox = (props) => {
    return <Box className={`${classes.wrapper}`}>{props.children}</Box>;
  };

  const handleSignout = () => {
    localStorage.clear();
    setAuth(false);
    router.push("/");
  };

  return (
    <>
      <HeaderBox>
        <Box className={classes.headerInsideBox}>
          <img
            onClick={() => router.push("/")}
            width={140}
            height={120}
            src="/Logo.png"
            alt="Logo"
            className="hover:cursor-pointer"
          />
          <Box className={classes.subWrapper}>
            {media1024 ? <BurgerMenu /> : <NavBar />}
            {!auth ? (
              <Box className={classes.buttonsWrapper}>
                {!media1024 && (
                  <Button
                    className={classes.loginButton}
                    onClick={() => router.push("/login")}
                  >
                    {"LOGIN"}
                  </Button>
                )}

                {!media1024 && (
                  <Button
                    className={classes.signUpButton}
                    onClick={() => router.push("/signup")}
                  >
                    {"SIGNUP"}
                  </Button>
                )}
                {media1024 && (
                  <Button
                    className={classes.MobileloginButton}
                    onClick={() => router.push("/login")}
                  >
                    {"LOGIN"}
                  </Button>
                )}
              </Box>
            ) : (
              <Box>
                <Button onClick={() => router.push("/profile")}>
                  <FaUserAlt />
                  <Box className={classes.profile}>My Profile</Box>
                </Button>
                <Button
                  onClick={handleSignout}
                  className={classes.signUpButton}
                >
                  Sign Out
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </HeaderBox>
    </>
  );
};

Header.defaultProps = {
  isLoading: false,
  errors: "",
  mobileLastFourDigits: "",
};

export default React.memo(withStyles(styles)(Header));
