import React, { useCallback, useState, useMemo, useEffect } from "react";
import { Input, withStyles, makeStyles, Box } from "@material-ui/core";

import styles from "./styles";

const SimpleInput = ({
  classes,
  value,
  type,
  onChange,
  inputName,
  placeholder,
  autoFocus,
  isWithShowIcon,
  errorDescription,
  isValid,
  isDisabled,
  isUpdateTouchStatus,
  onBlur,
  inputOverRide,
  overRideClass,
  customForDashBoard,
  isDemo,
  emailType,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isTouched, setTouched] = useState(false);

  const handlePasswordVisibilityToggle = useCallback(() => {
    if (type === "password") {
      setPasswordVisible((visibility) => !visibility);
    }
  }, [type]);

  const handleBlur = useCallback(() => {
    setTouched(true);

    if (onBlur) {
      onBlur();
    }
  }, [onBlur]);

  const isInputInvalid = useMemo(
    () => errorDescription && isTouched && !isValid,
    [errorDescription, isTouched, isValid]
  );

  useEffect(() => {
    setTouched(false);
    value && setTouched(true);
  }, [isUpdateTouchStatus]);

  return (
    <Box className={classes[overRideClass]}>
      <Input
        className={`${classes.input} ${
          customForDashBoard ? classes.customforUserDashboard : ""
        }`}
        onChange={onChange}
        autoComplete="off"
        id={inputName}
        name={inputName}
        error={!!isInputInvalid}
        value={value}
        type={type === "password" && isPasswordVisible ? "text" : type}
        placeholder={placeholder}
        onBlur={handleBlur}
        fullWidth
        disabled={isDisabled}
        autoFocus={autoFocus}
        endAdornment={
          isWithShowIcon && (
            <Box
              onClick={() => handlePasswordVisibilityToggle()}
              className={classes.showIcon}
            ></Box>
          )
        }
      />
    </Box>
  );
};

SimpleInput.defaultProps = {
  inputName: "",
  type: "text",
  placeholder: "",
  autoFocus: false,
  isWithShowIcon: false,
  isValid: false,
  errorDescription: "",
  isDisabled: false,
  onChange: () => {},
  onBlur: undefined,
  inputOverRide: () => {},
  overRideClass: "inputWrapper",
  customForDashBoard: false,
  isDemo: false,
  emailType: 0,
};

export default React.memo(withStyles(styles)(SimpleInput));
