import axios from "axios";
import { useQuery } from "react-query";

export const useProductSearch = () => {
  return useQuery(["product-search"], () => {
    return axios.get("/example-endpoint").then((response) => response.data);
  });
};
