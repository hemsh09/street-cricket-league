import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import dynamic from "next/dynamic";

import styles from "./styles";

const Box = dynamic(() => import("@material-ui/core/Box"));
const HeaderContainer = dynamic(() => import("../Common/Header"));

const FooterContainer = dynamic(() => import("./Footer"));

const MainLayout = ({ children, classes }) => {
  return (
    <>
      <HeaderContainer />
      <Box className={classes.childContainer}>{children}</Box>
      <FooterContainer />
    </>
  );
};

MainLayout.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  children: PropTypes.node.isRequired,
};

export default React.memo(withStyles(styles)(MainLayout));
