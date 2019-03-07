import React from "react";

const SvgEdoAddDocument = props => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props} stroke={props.fill}>
    <circle cx={10} cy={10} r={7} strokeWidth={2} fill="none"/>
    <path
      strokeWidth={2}
      strokeLinecap="round"
      d="M10 7v6M7 10h6"
    />
  </svg>
);

export default SvgEdoAddDocument;
