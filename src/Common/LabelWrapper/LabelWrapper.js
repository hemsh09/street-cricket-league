import React, { useCallback } from "react";
import { InputLabel, withStyles } from "@material-ui/core";

import styles from "./styles";

export const LabelWrapper = ({
  classes,
  inputName,
  children,
  labelText,
  dynamicClass,
}) => {
  return (
    <>
      <InputLabel
        htmlFor={inputName}
        className={`${classes.label} ${
          dynamicClass ? classes[dynamicClass] : ""
        } `}
      >
        {labelText}
      </InputLabel>
      {children}
    </>
  );
};

LabelWrapper.defaultProps = {
  size: "medium",
  fontWeight: "normal",
  inputName: "",
};

export default React.memo(withStyles(styles)(LabelWrapper));
