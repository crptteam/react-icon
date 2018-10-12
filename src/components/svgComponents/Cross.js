import React from "react";

const SvgCross = props => (
  <svg viewBox="0 0 16 16" stroke="#212C42" width="1em" height="1em" {...props}>
    <g strokeWidth={2}>
      <path d="M2 2l10 10M12 2L2 12" />
    </g>
  </svg>
);

export default SvgCross;
