import React, { useCallback } from "react";
import { Box, Button, withStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import Link from "next/link";

import { notLoggedInNavItems } from "./config";

import styles from "./styles";

const NavBar = ({ classes }) => {
  const router = useRouter();

  return (
    <Box className={classes.wrapper}>
      {notLoggedInNavItems.map((menuItem) => {
        return (
          <React.Fragment key={menuItem.label}>
            {!menuItem.isLink ? (
              <Button
                key={menuItem.label}
                className={classes.blackText}
                variant="text"
              >
                <Link href={menuItem.path}>{menuItem.label}</Link>
              </Button>
            ) : (
              <a href={menuItem.path}>{menuItem.label}</a>
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default withStyles(styles)(NavBar);
