import React from "react";

const SvgCloseModal = props => (
  <svg width="1em" height="1em" viewBox="0 0 9 9" fill="#fff" {...props}>
    <rect
      x={7.071}
      width={2}
      height={10}
      rx={1}
      transform="rotate(45 7.071 0)"
    />
    <rect
      y={1.414}
      width={2}
      height={10}
      rx={1}
      transform="rotate(-45 0 1.414)"
    />
  </svg>
);

export default SvgCloseModal;
