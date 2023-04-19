import axios from "axios";
import { Product } from "fullstack-react-tdd-example-types";
import { useQuery } from "react-query";

export const useMockServiceWorkerDemo = () => {
  return useQuery(
    ["mock-service-worker-demo"],
    () => {
      return axios
        .get<Product[]>(`/mock-service-worker-demo`)
        .then((response) => response.data);
    },
    {
      enabled: false,
    }
  );
};
