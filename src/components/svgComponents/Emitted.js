import React from "react";

const SvgEmitted = props => (
  <svg fill="#212C42" viewBox="0 0 16 16" width="1em" height="1em" {...props}>
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
        d="M14 5h-3V2h3v3zm0 10c0 .55-.45 1-1 1s-1-.45-1-1v-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v1zm1-15h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM2 14h3v-3H2v3zM1 9h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm4-4H2V2h3v3zm1-5H1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
      />
    </g>
  </svg>
);

export default SvgEmitted;
