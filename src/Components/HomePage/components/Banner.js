import React from "react";
import {
  Box,
  Typography,
  withStyles,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";

import Banner from "../../../static/Images/CricketBanner.png";
import TabsButton from "../../../Common/Tabs";

import styles from "./styles";

const Promotion = ({ classes }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/tournament");
  };
  const handleDemoAccount = () => {
    router.push("/login");
  };

  const media786px = useMediaQuery("(max-width: 786px)");
  return (
    <Box>
      <Box className={classes.bannerWrapper}>
        <Typography variant="h1" className={classes.promoText}>
          {"Street Cricket League"}
        </Typography>
        <Box>
          <Image
            width={media786px ? 1024 : 1840}
            src={Banner}
            alt="Banner Image"
          />
        </Box>
        <Box className={classes.promoContent}>
          <Box className={classes.textWrapper}>
            <Box className={classes.subtitle}>{"Let the Game Begin."}</Box>
          </Box>
          <Box className={classes.buttonWithAppStore}>
            <Box className={classes.accountButtonArea}>
              <button
                className={classes.startNowButton}
                onClick={handleClick}
                variant="contained"
              >
                {"Tournament"}
              </button>
              <button
                className={classes.freeDemoButton}
                variant="contained"
                // endIcon={<ArrowRightSvg />}
                onClick={handleDemoAccount}
              >
                {"Login"}
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
      <TabsButton />
    </Box>
  );
};

export default React.memo(withStyles(styles)(Promotion));
