import React from "react";

const SvgClosedArrow = props => (
  <svg fill="#212C42" viewBox="0 0 16 16" width="1em" height="1em" {...props}>
    <mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8V0h16v16H0V8z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 15h10c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3a1 1 0 1 0 0 2c.552 0 1 .449 1 1v5c0 .551-.448 1-1 1H3c-.552 0-1-.449-1-1V7c0-.551.448-1 1-1h4.586L6.293 7.293a.999.999 0 1 0 1.414 1.414l3-3a.999.999 0 0 0 0-1.414l-3-3a.999.999 0 1 0-1.414 1.414L7.586 4H3C1.346 4 0 5.346 0 7v5c0 1.654 1.346 3 3 3"
      />
    </g>
  </svg>
);

export default SvgClosedArrow;
