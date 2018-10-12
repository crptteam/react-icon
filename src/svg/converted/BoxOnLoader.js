import React from "react";

const SvgBoxOnLoader = props => (
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
        d="M11 10H2V2h9v8zm-7 2H1a1 1 0 0 1-1-1V1.001C0 .418.479 0 1.001 0H12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4zm10-9a1 1 0 1 1 2 0v11a1 1 0 0 1-1 1h-2a1 1 0 1 1-2 0H2a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1h13V3z"
      />
    </g>
  </svg>
);

export default SvgBoxOnLoader;
