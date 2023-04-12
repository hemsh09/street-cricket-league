import React from "react";
import { Box, Button, withStyles, Menu, MenuItem } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";

import { mobileMenuItems } from "../Constant";

import styles from "./styles";

const NavDropDown = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box className={classes.globeIcon}>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          onClick={handleClick}
          className={classes.buttonWrapOne}
        >
          {"common:MORE"}
          {/* <DownArrow /> */}
        </Button>
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className={classes.menuWrap}
        style={{ top: "50px" }}
      >
        {mobileMenuItems.map((item, id) => (
          <MenuItem key={id}>
            <Link href={item.link}>{item.name}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default React.memo(withStyles(styles)(NavDropDown));
