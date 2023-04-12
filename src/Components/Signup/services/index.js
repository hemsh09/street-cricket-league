import axios from "axios";

import ApiDomain from "../../../Common/ApiDomain";

export const Signup = async (setSuccess, setIsLoading, setError, body) => {
  setIsLoading(true);
  try {
    const response = await axios.post(`${ApiDomain}/signup`, body);
    setSuccess(true);
    setIsLoading(false);
  } catch (err) {
    console.log(err);
    setSuccess(false);
    setError(err.message);
    setIsLoading(false);
  }
};
