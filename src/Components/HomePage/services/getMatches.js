import axios from "axios";

import ApiDomain from "../../../Common/ApiDomain";

const getMatches = async (setMatchData, setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await axios.get(`${ApiDomain}/matches`);
    setMatchData(response.data);
    setIsLoading(false);
  } catch (error) {
    setMatchData([]);
    console.log(error);
  }
};
export default getMatches;
