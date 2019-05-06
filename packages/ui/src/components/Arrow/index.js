// Libraries
import React from 'react';

// TODO(mark): Make this cross-platform using react-x-svg.
const Arrow = ({color}) => (
  <svg width="18px" height="8px" viewBox="0 0 18 8">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-568.000000, -1196.000000)" stroke={color}>
        <g transform="translate(90.000000, 902.000000)">
          <g transform="translate(298.000000, 286.000000)">
            <g transform="translate(180.000000, 8.000000)">
              <path d="M1,4 L13,4" strokeLinecap="square" />
              <polygon
                fill={color}
                fillRule="evenodd"
                transform="translate(15.000000, 4.000000) rotate(90.000000) translate(-15.000000, -4.000000)"
                points="15 2 18 6 12 6"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Arrow;
