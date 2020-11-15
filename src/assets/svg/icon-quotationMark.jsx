import React from "react";

export default ({ fillColor, width, ...props }) => (
  <svg width={width} viewBox="0 0 65 51" {...props}>
    <path
      d="M9.8 50.16C23.24 37.68 31.76 26.76 31.76 17.04C31.76 6.84 24.68 0.719996 16.76 0.719996C8.48 0.719996 1.64 7.55999 1.64 15.84C1.64 24.12 8 28.08 9.32 29.52C7.88 32.28 4.04 37.2 0.44 41.04L9.8 50.16ZM42.08 50.16C55.52 37.68 64.04 26.76 64.04 17.04C64.04 6.84 56.96 0.719996 49.04 0.719996C40.76 0.719996 33.92 7.55999 33.92 15.84C33.92 24.12 40.28 28.08 41.6 29.52C40.16 32.28 36.32 37.2 32.72 41.04L42.08 50.16Z"
      fill={fillColor}
    />
  </svg>
);
