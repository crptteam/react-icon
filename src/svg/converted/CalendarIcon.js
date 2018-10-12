import React from "react";

const SvgCalendarIcon = props => (
  <svg fill="#393B48" viewBox="0 0 16 15" width="1em" height="1em" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 6a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM8 6a1 1 0 1 0 0 2 1 1 0 1 0 0-2zM10 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0zM5 9a1 1 0 1 0 0 2 1 1 0 1 0 0-2zM8 9a1 1 0 1 0 0 2 1 1 0 1 0 0-2zM11 9a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"
    />
    <mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={16} height={15}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 15h16V0H0v15z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 13h12V4H2v9zM14 2h-1V1a1 1 0 1 0-2 0v1H5V1a1 1 0 1 0-2 0v1H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
      />
    </g>
  </svg>
);

export default SvgCalendarIcon;
