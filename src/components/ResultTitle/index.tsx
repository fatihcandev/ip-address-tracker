import React from "react";
import styles from "./styles.module.scss";

const ResultTitle: React.FC = ({ children }) => (
    <h1 className={styles.title}>{children}</h1>
);

export default ResultTitle;
