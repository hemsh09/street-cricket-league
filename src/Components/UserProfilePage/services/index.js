import axios from "axios";

import ApiDomain from "../../../Common/ApiDomain";

export const getUserInfo = async (setUserInfo, setIsLoading, body) => {
  setIsLoading(true);
  try {
    const response = await axios.post(`${ApiDomain}/userInfo`, body);
    setUserInfo(response.data);
    setIsLoading(false);
  } catch (err) {
    console.log(err);
  }
};

export const updateUserInfo = async (setIsLoading, body, id) => {
  setIsLoading(true);
  try {
    const response = await axios.put(`${ApiDomain}/updateUserInfo/${id}`, body);
    setIsLoading(false);
  } catch (err) {
    console.log(err);
  }
};
