import React from "react";
import Loading from "../Loading";
import MapComponent from "../Map";
import { MapPosition } from "../../types";
import bg from "../../images/bg.png";
import styles from "./styles.module.scss";

interface LayoutProps {
    loading: boolean;
    error: any;
    position: MapPosition;
}

const Layout: React.FC<LayoutProps> = ({
    loading,
    error,
    position,
    children,
}) => (
    <div className={styles.layout}>
        <img
            src={bg}
            alt="background with map pattern"
            className={styles.img}
        />
        {loading ? (
            <Loading />
        ) : error ? (
            "Error"
        ) : (
            <MapComponent lat={position.lat} lng={position.lng} />
        )}
        <div className={styles.children}>{children}</div>
    </div>
);

export default Layout;
