import React from "react";
import Spinner from "../Spinner";
import styles from "./styles.module.scss";

const Loading = () => (
    <div className={styles.loading}>
        <Spinner />
        <span>Fetching the location...</span>
    </div>
);

export default Loading;
