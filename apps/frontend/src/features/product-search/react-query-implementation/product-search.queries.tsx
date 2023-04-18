import axios from "axios";
import { Product } from "fullstack-react-tdd-example-types";
import { useQuery } from "react-query";

export const useProductSearch = (searchTerm: string) => {
  return useQuery(
    ["product-search"],
    () => {
      return axios
        .get<Product[]>(`/product-search?search-term=${searchTerm}`)
        .then((response) => response.data);
    },
    {
      enabled: false,
    }
  );
};
