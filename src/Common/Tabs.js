import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

import FixturesCard from "../Components/HomePage/components/FixturesCard";
import getMatches from "../Components/HomePage/services/getMatches";

import styles from "./styles";

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const TabsButton = ({ classes }) => {
  const [matchData, setMatchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(2);

  const handleChange = (event, value) => {
    setValue(value);
  };
  useEffect(() => {
    getMatches(setMatchData, setIsLoading);
  }, []);
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          className={classes.tabsWrapper}
          style={{ margin: "auto" }}
        >
          <Tab label="Live" />
          <Tab label="Upcoming" />
          <Tab label="Completed" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <TabContainer>
          <Box className="bg-red m-auto lg:w-1/2 w-full flex justify-center rounded-lg bg-[#777980] h-48 items-center text-white">
            <Typography className="font-semibold text-center text-lg">
              No data
            </Typography>
          </Box>
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <Box className="bg-red m-auto lg:w-1/2 w-full flex justify-center rounded-lg bg-[#777980] h-48 items-center text-white">
            <Typography className="font-semibold text-center text-lg">
              No data
            </Typography>
          </Box>
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <FixturesCard matchData={matchData} isLoading={isLoading} />
        </TabContainer>
      )}
    </div>
  );
};

TabsButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsButton);
