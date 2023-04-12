import axios from "axios";

import ApiDomain from "../../../Common/ApiDomain";

export const getProducts = async (setProduct, setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await axios.get(`${ApiDomain}/products`);
    setProduct(response.data[0].products);
    console.log({ response });
    setIsLoading(false);
  } catch (err) {
    console.log(err);
    setProduct([]);
  }
};
