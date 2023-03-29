import axios from "axios";
import { useQuery } from "react-query";

export const useProductSearch = () => {
  return useQuery(["product-search"], () => {
    return axios.get("/product-search").then((response) => response.data);
  });
};
