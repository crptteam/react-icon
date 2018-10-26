import React from "react";

const SvgEdoApprove = props => (
  <svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
    <rect x={14} y={3} width={2} height={2} rx={1} />
    <rect y={11} width={2} height={2} rx={1} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.293 4.707L1 5.414l2.121 2.121a1 1 0 0 0 1.414-1.414L3.415 5H8a1 1 0 0 0 0-2H3.414l1.121-1.122A1 1 0 1 0 3.121.464l-2.12 2.122-.708.707a1 1 0 0 0 0 1.414zM15 10.414l-2.121-2.121a1 1 0 0 0-1.415 1.414L12.757 11H8a1 1 0 0 0 0 2h4.414l-.95.95a1 1 0 1 0 1.415 1.414l2.12-2.121.708-.707a1 1 0 0 0 0-1.415L15 10.414z"
    />
  </svg>
);

export default SvgEdoApprove;
