import React from "react";

const SvgBlock = props => (
  <svg viewBox="0 0 16 16" fill="#212C42" width="1em" height="1em" {...props}>
    <g fillRule="evenodd">
      <path fill="none" d="M0 0h16v16H0z" />
      <g>
        <path d="M13 3a1 1 0 0 0-1 1v10H5a1 1 0 1 0 0 2h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" />
        <path d="M3 11h6V6H3v5zm0-7h6V2H3v2zm8 8V1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z" />
      </g>
    </g>
  </svg>
);

export default SvgBlock;
