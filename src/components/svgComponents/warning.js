import React from 'react';

const Warning = props => (
    <svg width="1em" height="1em" viewBox="0 0 16 15" fill="none" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 5a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z"
        />
        <path d="M7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0c.34 0 .65.183.807.476l7.09 13.235a.86.86 0 0 1-.03.865.916.916 0 0 1-.777.424H.91a.916.916 0 0 1-.778-.424.86.86 0 0 1-.03-.865L7.192.476A.914.914 0 0 1 8 0zM2.408 13.235h11.184L8 2.796l-5.592 10.44z"
        />
    </svg>
);

export default Warning;
