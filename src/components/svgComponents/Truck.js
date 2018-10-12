import React from "react";

const SvgTruck = props => (
  <svg fill="#212C42" viewBox="0 0 16 16" width="1em" height="1em" {...props}>
    <mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16h8V0H0v16h8z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 14a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm-8 0a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm7-8V3h2.323l1.2 3H10zm5.981.81a.909.909 0 0 0-.061-.202l-1.991-4.98A1.002 1.002 0 0 0 13 1h-3a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0V2h6v5a1 1 0 0 0 1 1h5v4c-.062 0-.115.024-.174.035A2.992 2.992 0 0 0 11 10a2.993 2.993 0 0 0-2.815 2H6c-.062 0-.115.024-.174.035A2.992 2.992 0 0 0 3 10c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.992 2.992 0 0 0 2.826-2.035c.059.011.112.035.174.035h2.185A2.993 2.993 0 0 0 11 16a2.992 2.992 0 0 0 2.826-2.035c.059.011.112.035.174.035h1a1 1 0 0 0 1-1V7.022a.9.9 0 0 0-.019-.212z"
      />
    </g>
  </svg>
);

export default SvgTruck;
