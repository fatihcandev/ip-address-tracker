import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { MapPosition } from "../../types";
import styles from "./styles.module.scss";

const MapComponent: React.FC<MapPosition> = ({ lat, lng }) => (
    <Map center={[lat, lng]} zoom={13} className={styles.map}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]}>
            <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
            </Popup>
        </Marker>
    </Map>
);

export default MapComponent;
