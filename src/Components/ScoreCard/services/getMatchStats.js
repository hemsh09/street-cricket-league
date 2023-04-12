import axios from "axios";

import ApiDomain from "../../../Common/ApiDomain";

const getMatchStats = async (setMatchStats, setIsLoading, id) => {
  setIsLoading(true);
  try {
    const response = await axios.get(`${ApiDomain}/scorecard/${id}`);
    setMatchStats(response.data);
    setIsLoading(false);
  } catch (error) {
    setMatchStats([]);
    console.log(error);
  }
};
export default getMatchStats;
