import React from "react";

const SvgAddPlus = props => (
    <svg fill="none" height={12} width={12} {...props}>
        <path
            clipRule="evenodd"
            d="M6 .757a1 1 0 0 1 1 1V5h3.243a1 1 0 1 1 0 2H7v3.243a1 1 0 1 1-2 0V7H1.758a1 1 0 1 1 0-2H5V1.757a1 1 0 0 1 1-1z"
            fillRule="evenodd"
        />
    </svg>
);

export default SvgAddPlus;
