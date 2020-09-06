import { gql } from "@apollo/client";

export const typeDefs = gql`
    type Geolocation {
        ip: String!
        location: Location!
        isp: String!
    }

    type Location {
        country: String!
        region: String!
        city: String!
        lat: Int!
        lng: Int!
        postalCode: String!
        timezone: String!
    }
`;
