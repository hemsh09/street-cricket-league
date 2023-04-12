import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  withStyles,
  Button,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useRouter } from "next/router";
import axios from "axios";

import { emailCheck, isInputNotEmpty } from "../helpers";
import SimpleInput from "../../../Common/SimpleInput/SimpleInput";
import LabelWrapper from "../../../Common/LabelWrapper/LabelWrapper";
import { useAuthContext } from "../../../../context/context";
import ApiDomain from "../../../Common/ApiDomain";

import styles from "./styles";

const LoginModal = ({
  classes,
  isForgotPasswordMode,
  handleToggleModalMode,
}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useAuthContext();
  const handleLoginModalSubmit = async () => {
    try {
      const response = await axios.post(`${ApiDomain}/login`, {
        email: email,
        password: password,
      });
      const serializedState = JSON.stringify({
        auth: response?.data?.isAuth,
        token: response?.data?.token,
      });
      localStorage.setItem("auth", serializedState);
      const isAuth = localStorage.getItem("auth");
      const parse = JSON.parse(isAuth);
      setAuth(parse.auth && parse.token.length > 0);
      isAuth && router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box className={classes.boxWrapper}>
        <Box className={classes.formWrapper}>
          <Box className={classes.titleWrapper}>
            {isForgotPasswordMode && (
              <IconButton
                aria-label="close"
                className={classes.closeButton}
                onClick={handleToggleModalMode}
              >
                <ArrowBackIosIcon />
              </IconButton>
            )}
            <Typography className={classes.title} variant="h6">
              {"Login"}
            </Typography>
          </Box>
          <Box className={classes.fieldArea}>
            <Box className={classes.inputWrapper}>
              <LabelWrapper labelText={"Email Address"} inputName="email">
                <SimpleInput
                  value={email}
                  isValid={emailCheck(email)}
                  errorDescription={"Invalid Email"}
                  inputName="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={"Your Email"}
                  // isUpdateTouchStatus={isForgotPasswordMode}
                  type="email"
                />
              </LabelWrapper>
            </Box>
            {!emailCheck(email) && email.length != 0 && (
              <Box className={classes.emailError}>Invalid Email</Box>
            )}
            <Box className={classes.inputWrapper}>
              <LabelWrapper labelText={"Password"} inputName="password">
                <SimpleInput
                  value={password}
                  inputName="password"
                  isValid={isInputNotEmpty(password)}
                  errorDescription={"Invalid Input"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={"Your Password"}
                  isWithShowIcon
                  type="password"
                />
              </LabelWrapper>
            </Box>
            {password.length != 0 && password.length < 4 && (
              <Box className={classes.emailError}>
                Password must be of four digits
              </Box>
            )}
            {/* {!isForgotPasswordMode && (
              <Button
                className={classes.textButton}
                variant="text"
                onClick={handleToggleModalMode}
              >
                {"Forgot Password"}
              </Button>
            )} */}
            <Button
              disabled={password.length < 4 || !emailCheck(email)}
              fullWidth
              className={classes.submitButton}
              onClick={handleLoginModalSubmit}
              type={"submit"}
            >
              {"Submit"}
            </Button>
            <Box>
              <Box className={classes.buttonSubTitle}>
                <Typography variant="body2">
                  {"Haven't registered yet? :"}
                </Typography>
                <Button
                  className={classes.textButton}
                  variant="text"
                  onClick={() => router.push("/signup")}
                >
                  {"Signup"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(withStyles(styles)(LoginModal));
