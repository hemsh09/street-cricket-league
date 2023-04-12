import React, { useEffect, useState } from "react";

import LeaderBoardLayout from "../components";
import { getPlayerInfo } from "../services";

const LeaderboardContainer = () => {
  const [playerInfo, setPlayerInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPlayerInfo(setPlayerInfo, setIsLoading);
  }, []);

  return <LeaderBoardLayout isLoading={isLoading} playerInfo={playerInfo}/>;
};

export default LeaderboardContainer;
