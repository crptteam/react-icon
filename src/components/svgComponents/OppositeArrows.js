import React from "react";

const SvgOppositeArrows = props => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="#434244" {...props}>
    <rect x={14} y={3} width={2} height={2} rx={1} />
    <rect y={11} width={2} height={2} rx={1} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 5.414l-.707-.707a1 1 0 0 1 0-1.414L1 2.586 3.121.464A1 1 0 1 1 4.536 1.88L3.414 3H11a1 1 0 1 1 0 2H3.414l1.122 1.121A1 1 0 1 1 3.12 7.536L1 5.414zM15 13.243l.707-.707a1 1 0 0 0 0-1.415L15 10.414l-2.121-2.121a1 1 0 1 0-1.415 1.414L12.757 11H5a1 1 0 1 0 0 2h7.414l-.95.95a1 1 0 1 0 1.415 1.414L15 13.243z"
    />
  </svg>
);

export default SvgOppositeArrows;
