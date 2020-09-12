import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { typeDefs } from "../typeDefs";

const apiKey = process.env.REACT_APP_LOCATION_API_KEY;

const restLink = new RestLink({
  uri: `https://geo.ipify.org/api/v1?apiKey=${apiKey}&`,
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
});

export const client = new ApolloClient({
  typeDefs,
  link: restLink,
  cache: new InMemoryCache(),
});
