import React from "react";

const SvgEmission = props => (
  <svg fill="#212C42" viewBox="0 0 16 16" width="1em" height="1em" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 11a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h3zM9 14a1 1 0 1 0 0 2 1 1 0 1 0 0-2M9 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2M12 14a1 1 0 1 0 0 2 1 1 0 1 0 0-2M15 14a1 1 0 1 0 0 2 1 1 0 1 0 0-2"
    />
    <mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16h16V0H0v16z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5h3V2H2v3zm4-5H1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM2 14h3v-3H2v3zm4-5H1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zM11 5h3V2h-3v3zm4-5h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
      />
    </g>
  </svg>
);

export default SvgEmission;
