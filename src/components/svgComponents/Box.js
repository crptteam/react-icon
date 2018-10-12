import React from "react";

const SvgBox = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <path id="a" d="M0 16h16V0H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <path
        fill="#212C42"
        d="M1 12a1 1 0 0 1-1-1V1.001C0 .418.479 0 1.001 0H5h-.001H12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1zm1-2h9V2H2v8zm13-8a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-2a1 1 0 1 1-2 0H2a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1h13V3a1 1 0 0 1 1-1z"
        mask="url(#b)"
      />
    </g>
  </svg>
);

export default SvgBox;
