import React from "react";

const SvgCodeInvalid = props => (
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
        d="M14 5h-3V2h3v3zm-4-5h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm3 14.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707-.707-.707a1.002 1.002 0 0 1 0-1.415 1.004 1.004 0 0 1 1.414 0l.707.708.707-.708a1.004 1.004 0 0 1 1.414 0 1.004 1.004 0 0 1 0 1.415l-.707.707.707.707a1.003 1.003 0 0 1 0 1.414 1.003 1.003 0 0 1-1.414 0L13 14.414zM2 5h3V2H2v3zM1 0h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm4 14H2v-3h3v3zm1-5H1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"
      />
    </g>
  </svg>
);

export default SvgCodeInvalid;
