import React from "react";

const SvgRectification = props => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="#434244" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.243 1L8.535.292a1 1 0 0 0-1.415 0L6.414 1 4.293 3.121a1 1 0 0 0 1.414 1.415L7 3.243V11a1 1 0 1 0 2 0V3.586l.95.95a1 1 0 0 0 1.414-1.415L9.243 1z"
    />
    <rect y={16} width={2} height={16} rx={1} transform="rotate(-90 0 16)" />
  </svg>
);

export default SvgRectification;
