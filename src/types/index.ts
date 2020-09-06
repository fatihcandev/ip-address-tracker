import { LazyQueryHookOptions, LazyQueryResult } from "@apollo/client";

export type LazyQueryApiFunc = (
    options?: LazyQueryHookOptions,
    data?: any
) => void;

export type LazyQueryFunc = (
    options?: LazyQueryHookOptions
) => [LazyQueryApiFunc, LazyQueryResult<any, Record<string, any>>];

export interface Geolocation {
    ip: string;
    location: Location;
    isp: string;
}

export interface Location {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
}

export interface MapPosition {
    lat: number;
    lng: number;
}
