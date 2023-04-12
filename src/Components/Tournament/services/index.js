import axios from "axios";

import ApiDomain from "../../../Common/ApiDomain";

export const getTournament = async (setTournament, setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await axios.get(`${ApiDomain}/tournament`);
    setTournament(response.data[0].tournament);
    console.log({ response });
    setIsLoading(false);
  } catch (err) {
    console.log(err);
    setTournament([]);
  }
};
