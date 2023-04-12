import axios from "axios";

import ApiDomain from "../../../Common/ApiDomain";

export const getPlayerInfo = async (setPlayerInfo, setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await axios.get(`${ApiDomain}/leaderboard`);
    setPlayerInfo(response.data);
    console.log({ response });
    setIsLoading(false);
  } catch (err) {
    console.log(err);
  }
};
