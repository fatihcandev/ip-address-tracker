import React from "react";
import ResultTitle from "../ResultTitle";
import ResultText from "../ResultText";
import styles from "./styles.module.scss";

interface ResultProps {
    title: string;
    text: string;
}

const Result: React.FC<ResultProps> = ({ title, text }) => (
    <div className={styles.wrapper}>
        <ResultTitle>{title}</ResultTitle>
        <ResultText>{text}</ResultText>
    </div>
);

export default Result;
