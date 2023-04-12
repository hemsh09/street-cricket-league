import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Box, withStyles, IconButton, MenuItem, Menu } from "@material-ui/core";
import { useRouter } from "next/router";
import { useMediaQuery } from "@material-ui/core";

import MenuIcon from "../../../static/Images/SvgJs/BurgerMainMenuSvg";
import BurgerMainMenuWhiteSvg from "../../../static/Images/SvgJs/BurgerMainMenuWhiteSvg";
import { mobileMenuItems } from "../Constant";

import styles from "./styles";

const BurgerMenu = ({ classes }) => {
  const router = useRouter();
  const media1024px = useMediaQuery("(max-width: 1024px)");
  const [anchorElement, setAnchorElement] = useState(null);

  const handleAnchorSet = useCallback((event) => {
    setAnchorElement(event.currentTarget);
  }, []);

  const handleClose = useCallback((method) => {
    setAnchorElement(null);

    if (typeof method === "function") {
      method();
    }
  }, []);

  const handleGoTo = useCallback(
    (path) => {
      router.push(path);
    },
    [router]
  );

  return (
    <Box>
      <IconButton onClick={handleAnchorSet} className={classes.mobileHamBurger}>
        {media1024px ? <BurgerMainMenuWhiteSvg /> : <MenuIcon />}
      </IconButton>

      <Menu
        anchorEl={anchorElement}
        keepMounted
        open={!!anchorElement}
        onClose={handleClose}
        className={classes.menu}
      >
        {mobileMenuItems.map((item) => (
          <MenuItem
            className={classes.menuItem}
            key={item.title}
            onClick={() => handleGoTo(item.pathToGo)}
          >
            {item.title}
          </MenuItem>
        ))}
        {
          <MenuItem
            className={classes.menuItem}
            // onClick={() => handleGoTo(ROUTES.SIGN_UP_OPTIONS)}
          >
            {"common:SIGNUP"}
          </MenuItem>
        }
        {
          <MenuItem
            className={classes.menuItem}
            onClick={() => router.push("/login")}
          >
            {"common:LOGIN"}
          </MenuItem>
        }
      </Menu>
    </Box>
  );
};

export default React.memo(withStyles(styles)(BurgerMenu));
