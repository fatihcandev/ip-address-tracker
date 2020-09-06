import { gql } from "@apollo/client";

export const getGeolocation = gql`
    query getGeolocation($ip: String!) {
        getGeolocation(ip: $ip)
        @rest(type: "Geolocation", path: "ipAddress={args.ip}") {
            ip
            location {
                country
                region
                city
                lat
                lng
                postalCode
                timezone
            }
            isp
        }
    }
`;
