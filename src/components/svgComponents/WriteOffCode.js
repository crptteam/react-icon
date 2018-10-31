import React from "react";

const SvgWriteOffCode = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 16 16"
    fill="#212C42"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <path id="a" d="M0 16h16V0H0z" />
    </defs>
    <g fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <path
        d="M15 0a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h5zm-4 5h3V2h-3v3zm-.121 10.121a1 1 0 0 1 0-1.414l.707-.707-.707-.707a1.002 1.002 0 0 1 0-1.415 1.004 1.004 0 0 1 1.414 0l.707.708.707-.708a1.004 1.004 0 0 1 1.414 0 1.004 1.004 0 0 1 0 1.415l-.707.707.707.707a1.003 1.003 0 0 1 0 1.414 1.003 1.003 0 0 1-1.414 0L13 14.414l-.707.707a1.003 1.003 0 0 1-1.414 0zM6 0a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h5zM2 5h3V2H2v3zm4 4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5zm-4 5h3v-3H2v3z"
        mask="url(#b)"
      />
    </g>
  </svg>
);

export default SvgWriteOffCode;
