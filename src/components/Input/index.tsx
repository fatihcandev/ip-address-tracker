import React from "react";
import RightArrow from "../RightArrow";
import styles from "./styles.module.scss";

interface InputProps {
    ipValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    loading: boolean;
    valid: boolean;
}

const Input: React.FC<InputProps> = ({
    ipValue,
    onChange,
    onClick,
    loading,
    valid,
}) => (
    <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
            <input
                type="text"
                placeholder="Search for an ip address"
                value={ipValue}
                onChange={onChange}
                className={`${styles.input} ${!valid && styles.inputInvalid}`}
                disabled={loading}
                required
            />
            <button
                onClick={onClick}
                className={styles.button}
                disabled={loading}
            >
                <RightArrow />
            </button>
        </div>
    </div>
);

export default Input;
