import React from "react";
import Result from "../Result";
import styles from "./styles.module.scss";
import { Location } from "../../types";

interface ResultsProps {
    ip: string;
    location: Location;
    isp: string;
}

const Results: React.FC<ResultsProps> = ({ ip, location, isp }) => (
    <div className={styles.wrapper}>
        <Result title="IP ADDRESS" text={ip} />
        <Result
            title="LOCATION"
            text={`${location.city}, ${location.region} ${location.postalCode}`}
        />
        <Result title="TIMEZONE" text={`UTC ${location.timezone}`} />
        <Result title="ISP" text={isp} />
    </div>
);

export default Results;
