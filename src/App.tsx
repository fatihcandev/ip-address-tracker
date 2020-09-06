import React, { useState, useEffect, useCallback } from "react";
import get from "lodash/get";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Input from "./components/Input";
import useGeolocationApi from "./api/getGeolocation";
import { validateIp } from "./util/validateIp";
import { Geolocation, MapPosition } from "./types";
import "./styles/app.scss";
import Results from "./components/Results";

const App = () => {
    const [ip, setIp] = useState<string>("");
    const [geolocation, setGeolocation] = useState<Geolocation>();
    const [position, setPosition] = useState<MapPosition>({ lat: 0, lng: 0 });
    const [isInputValid, setIsInputValid] = useState<boolean>(false);
    const geolocationApi = useGeolocationApi();

    const [
        getGeolocation,
        { data, loading, error },
    ] = geolocationApi.useGetGeolocation();

    useEffect(() => {
        if (data) {
            const geoLocationData: Geolocation = get(data, "getGeolocation");
            setGeolocation(geoLocationData);
        }
    }, [data]);

    useEffect(() => {
        if (geolocation) {
            const lat: number = geolocation.location.lat;
            const lng: number = geolocation.location.lng;
            setPosition({
                lat,
                lng,
            });
        }
    }, [geolocation]);

    const handleGetGeolocation = useCallback(
        (ip: string) => {
            if (isInputValid) {
                getGeolocation({
                    variables: {
                        ip,
                    },
                });
            }
        },
        [getGeolocation, isInputValid]
    );

    useEffect(() => {
        if (!geolocation) {
            getGeolocation({
                variables: {
                    ip: "",
                },
            });
        }
    }, [geolocation, getGeolocation]);

    function handleIpChange(event: React.ChangeEvent<HTMLInputElement>) {
        let ip = event.target.value;
        setIp(ip);
    }

    const validateInput = useCallback(() => {
        if (ip.length > 16 || ip.length < 7) {
            setIsInputValid(false);
        } else if (!validateIp(ip)) {
            setIsInputValid(false);
        } else {
            setIsInputValid(true);
        }
    }, [ip]);

    useEffect(() => {
        validateInput();
    }, [validateInput]);

    return (
        <Layout position={position} loading={loading} error={error}>
            <Title />
            <Input
                ipValue={ip}
                onChange={handleIpChange}
                onClick={() => handleGetGeolocation(ip)}
                loading={loading}
                valid={isInputValid}
            />
            {geolocation && (
                <Results
                    ip={geolocation.ip}
                    location={geolocation.location}
                    isp={geolocation.isp}
                />
            )}
        </Layout>
    );
};

export default App;
