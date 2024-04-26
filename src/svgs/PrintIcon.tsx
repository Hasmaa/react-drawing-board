import React, { FC } from 'react';

const PrintIcon: FC = (props) => {
  return (
    <svg x="0px" y="0px" viewBox="0 0 64 64" {...props}>
      <mask id="a" fill="#fff">
        <rect x="3.836" y="10.836" width="16.333" height="5.833" rx="1" />
      </mask>
      <rect
        x="3.836"
        y="10.836"
        width="16.333"
        height="5.833"
        rx="1"
        stroke="currentColor"
        stroke-width="3"
        mask="url(#a)"
      />
      <path
        d="M7.336 13.75h5.833m2.331 0h1.167M6.75 16.5v1.503a1 1 0 0 0 1 1h8.5a1 1 0 0 0 1-1V16.5m-.578-5.664V8.003a3 3 0 0 0-3-3H8.339a1 1 0 0 0-1 1v4.833"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PrintIcon;
