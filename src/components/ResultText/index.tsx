import React from "react";
import styles from "./styles.module.scss";

const ResultText: React.FC = ({ children }) => (
    <span className={styles.text}>{children}</span>
);

export default ResultText;
