import { useLazyQuery } from "@apollo/client";
import { getGeolocation } from "../graphql/getLocation.graphql";
import { LazyQueryFunc } from "../types";

type GeolocationApi = {
  useGetGeolocation: LazyQueryFunc;
};

export default function useGeolocationApi(): GeolocationApi {
  const useGetGeolocation: LazyQueryFunc = (options) => {
    return useLazyQuery(getGeolocation, {
      fetchPolicy: "cache-and-network",
      ...options,
    });
  };

  return {
    useGetGeolocation,
  };
}
