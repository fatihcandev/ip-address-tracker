import React from "react";

const Spinner = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            background: "transparent",
            shapeRendering: "auto",
        }}
        width="50"
        height="50"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
    >
        <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#4e89ae"
            strokeWidth="5"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="0.5s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
            ></animateTransform>
        </circle>
    </svg>
);

export default Spinner;
